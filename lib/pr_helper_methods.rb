class PrHelperMethods
	def create_course_structure(course_class, course_grade, course_lesson = nil)
		byebug

		course_structure = {}

		if !course_lesson.nil?
			course_structure = Rails.cache.fetch("#{course_class}-#{course_grade}-#{course_lesson}", expires_in: 24.hours) do
				course_model = Course.new()
				course_structure = create_base_course_structure(course_class, "0#{course_grade}")

				current_lesson = course_model.get_by_type_and_name("#{course_class + course_grade + course_lesson}", Course.course_types[:lesson])

				lesson_metadata = JSON.parse(current_lesson[:metadata])

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

			current_class_metadata = JSON.parse(current_class[:metadata])
			current_course_metadata = JSON.parse(current_course[:metadata])

			course_structure = {
				name: current_class_metadata["name"],
				class_name: current_class[:name],
				course_name: current_course[:name],
				course_url: current_course[:url]
			}

			current_course_metadata.each{ |key, value| course_structure[key.to_sym] = value	}

			return course_structure
		end
	end
end