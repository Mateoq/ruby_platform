class Course < ActiveRecord::Base
	has_one(:course_data)
	attr_accessor :name, :pr_type, :metadata, :enabled
	validates :name, :pr_type, :enabled, presence: true
	validates :name, length: { maximum: 50 },
					 uniqueness: true
	validates :pr_type, numericality: true

	def self.grades
		{ primero: "1", segundo: "2", tercero: "3", cuarto: "4", quinto: "5" }
	end

	def self.classes
		{ mat: "Matemáticas", sci: "Ciencias Naturales", esp: "Lengua Castellana", soc: "Ciencias Sociales",  eng: "English" }		
	end

	def self.course_types
		{ class: 0, course: 1, lesson: 2 }
	end

	def get_by_type_and_name(name, type)
		Course.find_by(name: name, pr_type: type)
	end
	
end