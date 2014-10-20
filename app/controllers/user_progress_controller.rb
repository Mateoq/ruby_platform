class UserProgressController < ApplicationController
	# protect_from_forgery with: :null_session
	skip_before_filter :verify_authenticity_token, :only => :click_here_progress

	def click_here_progress
		byebug
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
end