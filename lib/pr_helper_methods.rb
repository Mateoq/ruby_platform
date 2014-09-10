class PrHelperMethods

	def initialize(session_data)
		@session_data = session_data
	end

	def initialize_user_data(course_class, course_grade, lesson = false)
		# TODO: add, update session token to user table
		byebug
		progress_model = UserProgress.new()
		course_num = Course.grades[course_grade.to_sym]
		cache_name = "#{@session_data[:user_token]}_course_#{course_class}_0#{course_num}"

		if Rails.cache.fetch(cache_name).nil? && lesson
			return nil
		end

		# ==============================
		# Initialize course
		# ==============================
		
		user_course_progress = Array.new
		parent_id = Course.find_by(name: "#{course_class}0#{course_num}", pr_type: Course.course_types[:course]).id
		lessons = Course.where(pr_type: Course.course_types[:lesson], parent_id: parent_id)

		lessons.each do |lesson, index|
			byebug
			lesson_metadata = JSON.parse(lesson[:metadata], { symbolize_names: true })

			if user_course_progress[lesson_metadata[:guide]].nil?
				user_course_progress[lesson_metadata[:guide]] = {}
			end

			user_course_progress[lesson_metadata[:guide]][lesson_metadata[:lesson_num].to_sym] = {
				id: lesson[:id],
				link: lesson[:url],
				enabled: false,
				current: false
			}

			if 0 == index
				menu_structure[lesson_metadata[:guide]][lesson_metadata[:lesson_num].to_sym][:current] = true
				menu_structure[lesson_metadata[:guide]][lesson_metadata[:lesson_num].to_sym][:enabled] = true
			end

			
		end

		progress = user_course_progress.to_json

		# Course
		query_course = Rails.cache.fetch(cache_name, expires_in: 24.hours) do
			progress_model.init_data({
				name: "#{course_class}_0#{course_num}",
				user_id: @session_data[:user_id],
				current_grade: course_num,
				metadata: user_course_progress.to_json,
				pr_type: UserProgress.progress_types[:course]
			})
		end

		# Guides
		query_keys = Array.new
	    (0..4).each do |i|
	    	byebug
	      	query = Rails.cache.fetch("#{@session_data[:user_token]}_guide_#{course_class}_0#{course_num}_0#{i}", expires_in: 24.hours) do
		        progress_model.init_data({
		          name: "#{course_class}_0#{course_num}_0#{i}",
		          user_id: @session_data[:user_id],
		          current_grade: course_num,
		          pr_type: UserProgress.progress_types[:guide],
		          parent_id: query_course.id
		        })
	      	end
	      	query_keys << query.id
	    end

		# Lessons
		lessons.each do |lesson|
			byebug
			lesson_metadata = JSON.parse(lesson[:metadata], { symbolize_names: true })
			cache_name = "#{@session_data[:user_token]}_lesson_#{course_class}_0#{course_num}_0#{json_metadata.guide + 1}_0#{json_metadata.lesson_num}"
			query = Rails.cache.fetch(cache_name, expires_in: 24.hours) do
				metadata = Hash.new(enabled: false, current: false)
				progress_model.init_data({
					name: "#{course_class}_0#{course_num}_0#{lesson_metadata[:guide]+ 1}_0#{lesson_metadata.lesson_num}",
					user_id: @session_data[:user_id],
					current_grade: course_num,
					metadata: metadata,
					pr_type: UserProgress.progress_types[:lesson],
					parent_id: query_keys[lesson_metadata[:guide]]
				})
			end

		end

		return  true
	end

	def create_course_structure(course_class, course_grade, course_lesson = nil)
		course_structure = {}

		if !course_lesson.nil?
			course_structure = Rails.cache.fetch("#{course_class}-#{course_grade}-#{course_lesson}", expires_in: 24.hours) do
				course_model = Course.new()
				course_structure = create_base_course_structure(course_class, "0#{course_grade}")

				current_lesson = course_model.get_by_type_and_name("#{course_class + course_grade + course_lesson}", Course.course_types[:lesson])

			
				lesson_metadata = JSON.parse(current_lesson[:metadata], { symbolize_names: true })

				lesson_structure = {
					lesson_name: current_lesson[:name],
					lesson_url: current_lesson[:url],
					lesson_id: lesson_metadata[:id],
					lesson_guide: lesson_metadata[:guide],
					lesson_name: lesson_metadata[:lesson_name]
				}

				course_structure.merge(lesson_structure)

				return course_structure
			end

		else
			course_structure = create_base_course_structure(course_class, "0#{course_grade}")
		end

		return course_structure
	end

	def create_base_course_structure(course_class, course_grade)
		course_structure = Rails.cache.fetch("#{course_class + course_grade}", expires_in: 24.hours) do
			course_model = Course.new()
			current_class = Rails.cache.fetch("#{course_class}_class", expires_in: 12.hours) do
				course_model.get_by_type_and_name(course_class, Course.course_types[:class])
			end

			current_course = Rails.cache.fetch("#{course_class + course_grade}", expires_in: 12.hours) do
				course_model.get_by_type_and_name("#{course_class + course_grade}", Course.course_types[:course])
			end

			current_class_metadata = JSON.parse(current_class[:metadata], { symbolize_names: true })
			current_course_metadata = JSON.parse(current_course[:metadata], { symbolize_names: true })

			course_structure = {
				name: current_class_metadata[:name],
				class_name: current_class[:name],
				course_id: current_course[:id],
				course_name: current_course[:name],
				course_url: current_course[:url]
			}

			current_course_metadata.each{ |key, value| course_structure[key] = value }

			return course_structure
		end

		return course_structure
	end

	def make_menu_structure(course_class, course_grade_name)
		byebug
		course = Rails.cache.fetch("#{@session_data[:user_token]}_course_0#{course_num}_0#{course_grade_name}", expires_in: 24.hours) do
			UserProgress.find_by(
				name: "#{course_class}_0#{course_grade_name}",
				pr_type: UserProgress.progress_types[:course]
			)
		end 

		result = JSON.parse(course[:metadata], { symbolize_names: true })
		return result
	end
end