class Course < ActiveRecord::Base
	# GRADES = { primero: 01, segundo: 02, tercero: 03, cuarto: 04, quinto:05 }
	# CLASSES = { mat: "Matemáticas", sci: "Ciencias Naturales", esp: "Lengua Castellana", soc: "Ciencias Sociales" }
	has_one(:course_data)
	attr_accessor :name, :type, :metadata, :enabled
	validates :name, :pr_type, :enabled, presence: true
	validates :name, length: { maximum: 50 },
					 uniqueness: true
	validates :pr_type, numericality: true

	def self.grades
		{ primero: "01", segundo: "02", tercero: "03", cuarto: "04", quinto: "05" }
	end

	def self.classes
		{ mat: "Matemáticas", sci: "Ciencias Naturales", esp: "Lengua Castellana", soc: "Ciencias Sociales" }		
	end

	def self.courseTypes
		{ class: 0, course: 1, lesson: 2 }
	end

	def intro_structure(courseClass, courseGrade, type)
		byebug
		currentClass = Rails.cache.fetch("#{courseClass}_class", expires_in: 24.hours) do
			Course.find_by(name: courseClass, pr_type: Course.courseTypes[:class])
		end

		currentCourse = Rails.cache.fetch("#{courseClass + courseGrade}", expires_in: 12.hours) do
			Course.find_by(name: courseClass + courseGrade, pr_type: Course.courseTypes[:course])
		end	

		courseMetadata = JSON.parse(currentCourse[:metadata])

		course = currentCourse.as_json
		course.store("course_data", courseMetadata)
		return course
	end
	
end
