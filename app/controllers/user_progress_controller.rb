class UserProgressController < ApplicationController
	# protect_from_forgery with: :null_session
	skip_before_filter :verify_authenticity_token, :only => :click_here_progress
	before_action :init

	def init
		@helper_methods = PrUserProgressHelperMethods.new(session)
	end

	def click_here_progress
    	user_course = params[:course]
		user_grade = Course.grades[params[:grade].to_sym]
		cache_name = "#{session[:user_token]}_course_#{user_course}_0#{user_grade}"
		course_progress = Rails.cache.fetch(cache_name)

		if course_progress.nil?
			render json: { message: "Unavailable user cache" }, status: :internal_server_error
			# render json: {asd: "#{session[:user_token]}_course_#{params[:course]}_#{user_grade}"}
			return
		end

		course_metadata = JSON.parse(course_progress[:metadata], { symbolize_names: true })

		case params[:option]
		when 1
			course_metadata[:click_here] = true

		when 2
			course_metadata[:click_here_menu] = true

		else 
			render json: { message: "Invalid option" }, status: :internal_server_error
			return
		end

		db_course = UserProgress.find_by(name: "#{params[:course]}_0#{user_grade}", user_id: session[:user_id])

		db_course.metadata = course_metadata.to_json
		course_progress[:metadata] = course_metadata.to_json

		result = db_course.save

		if false == result
			render json: { message: "There was invalid parameters" }, status: :internal_server_error
			return
		else
			Rails.cache.delete(cache_name)
			Rails.cache.write(cache_name, course_progress, expires_in: 24.hours)
			progress_cache = "#{session[:user_token]}_progress_#{user_course}_0#{user_grade}"
			Rails.cache.delete(progress_cache)
			Rails.cache.write(progress_cache, course_metadata, expires_in: 24.hours)
		end

		render json: { result: true }
	end

	def update
		pr_class = params[:pr_class]
		pr_grade = params[:grade]
		pr_guide = params[:guide]
		pr_lesson = params[:lesson]
		pr_lesson_item = params[:lesson_item]

		has_grade = params[:has_grade]

		grade_num = Course.grades[pr_grade.to_sym]
		course_module = params[:course_module]

		course_progress_cache_name = "#{session[:user_token]}_course_#{pr_class}_#{"%02d" % grade_num}"
		lesson_item_cache_name = "#{session[:user_token]}_item_#{pr_class}_#{"%02d" % grade_num}_#{"%02d" % pr_guide}_#{"%02d" % pr_lesson}_"

		lesson_items = params[:lesson_items]
		next_item = params[:next_item]

		course_progress = Rails.cache.fetch(course_progress_cache_name)

		lesson_item_progress = Rails.cache.fetch(lesson_item_cache_name + pr_lesson_item)
		lesson_item_progress_metadata = JSON.parse(lesson_item_progress[:metadata], { symbolize_names: true })

		result_data = {}
		if has_grade
			activity_data = params[:activity_data]
			schemes = Rails.cache.fetch("grades_schemes")

			result_data = {
				user_progress: {},
				activity_progress: {}
			}
			
			result_data[:activity_progress] = @helper_methods.generate_grade(lesson_item_progress_metadata[:stage], activity_data, schemes)
			lesson_item_progress_metadata.merge!(result_data[:activity_progress])
		end

		lesson_item_progress_metadata[:done] = true unless has_grade

		lesson_item_progress[:metadata] = lesson_item_progress_metadata.to_json
		lesson_item_progress[:grade] = result_data[:activity_progress][:grade] if has_grade

		if lesson_item_progress.save
			Rails.cache.write(lesson_item_cache_name + pr_lesson_item, lesson_item_progress, expires_in: 24.hours)

			metadata = JSON.parse(course_progress[:metadata], { symbolize_names: true })
			metadata[:lesson_progress][course_module.to_sym][pr_lesson_item.to_sym].merge!(lesson_item_progress_metadata)
			course_progress[:metadata] = metadata.to_json

			if course_progress.save
				Rails.cache.write(course_progress_cache_name, course_progress, expires_in: 24.hours)
			else
				render json: { message: "Database error." }, status: :internal_server_error
				return
			end
		else
			render json: { message: "Database error." }, status: :internal_server_error
			return
		end

		if has_grade && result_data[:activity_progress][:failed]
			result_data[:user_progress] = course_progress[:metadata]
			render json: result_data.to_json, status:ok
			return
		end

		course_progress = @helper_methods.restore_lesson_items(
			lesson_items,
			next_item,
			lesson_item_cache_name,
			course_progress,
			course_module: course_module.to_sym,
			course_progress_cache_name: course_progress_cache_name
		)

		unless course_progress
			render json: { message: "Data error." }, status: :internal_server_error
			return
		end

		render json: course_progress[:metadata], status: :ok unless has_grade

		result = @helper_methods.update_general_progress(course_progress,
			pr_grade: grade_num,
			pr_class: pr_class,
			pr_guide: pr_guide,
			pr_lesson: pr_lesson,
			course_module: course_module
		)

		unless result
			render json: { message: "Data error." }, status: :internal_server_error
			return
		end

		result_data[:user_progress] = JSON.parse(result[:metadata], { symbolize_names: true })
		render json: result_data.to_json, status: :ok
	end
end