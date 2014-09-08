class PrHelperMethods
	def initialize_user_data(course_class, course_grade)
		# TODO: add, update session token to user table
		byebug
		user_progress_model = UserProgress.new()
		course_string = Course.grades[course_grade.to_sym]
		cache_name = "#{session[:user_token]}_#{course_string}0#{course_grade}"

		if !Rails.cache.fetch(cache_name).nil?
			return nil
		end
		# ==============================
		# Initialize course
		# ==============================
		query = Array.new
		lessons_query = Array.new

		
		user_course_progress = Array.new
		lessons = Course.where(pr_type: Course.course_types[:lesson], parent_id: parent_id)

		lessons.each do |lesson, index|
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

		# Course
		query.push({
			name: "#{course_class}0#{course_string}",
			user_id: session[:user_id],
			current_grade: course_grade,
			metadata: user_course_progress.to_json
			pr_type: UserProgress.progress_types[:course]
		})

		# Guides
		for i in 0..4
			query.push({
				name: "#{course_class}0#{course_string}",
				user_id: session[:user_id],
				current_grade: course_grade,
				pr_type: UserProgress.progress_types[:course]
			})
		end

		# Lessons
		query.push({
				name: lesson[:name],
				user_id: session[:user_id],
				current_grade: course_grade,
				pr_type: UserProgress.progress_types[:lesson]
			})
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
					lesson_id: lesson_metadata["id"],
					lesson_guide: lesson_metadata["guide"],
					lesson_name: lesson_metadata["lesson_name"]
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

	def make_menu_structure(parent_id, course_class, course_grade)
		
		lessons = Course.where(pr_type: Course.course_types[:lesson], parent_id: parent_id)

		menu_structure = Array.new

		lessons.each do |lesson|
			byebug
			lesson_metadata = JSON.parse(lesson[:metadata], { symbolize_names: true })

			if menu_structure[lesson_metadata[:guide]].nil?
				menu_structure[lesson_metadata[:guide]] = {}
			end

			splited_lesson_id = lesson_metadata[:id].split("-")
			menu_structure[lesson_metadata[:guide]][lesson_metadata[:lesson_num].to_sym] = {
				link: "/curso/#{course_class}/#{course_grade}/#{splited_lesson_id[2]}",
				enabled: true,
				current: false
			}

			if splited_lesson_id[2] == 1
				menu_structure[lesson_metadata[:guide]][lesson_metadata[:lesson_num].to_sym][:current] = true
			end
		end

		return lessons
	end
end