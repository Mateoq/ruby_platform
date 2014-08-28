class Course < ActiveRecord::Base
	# GRADES = { primero: 01, segundo: 02, tercero: 03, cuarto: 04, quinto:05 }
	# CLASSES = { mat: "Matemáticas", sci: "Ciencias Naturales", esp: "Lengua Castellana", soc: "Ciencias Sociales" }
	has_one(:course_data)
	attr_accessor :name, :type, :metadata, :enabled
	validates :name, :type, :enabled, presence: true
	validates :name, length: { maximum: 50 },
					 uniqueness: true
	validates :type, numericality: true

	def self.grades
		{ primero: "01", segundo: "02", tercero: "03", cuarto: "04", quinto: "05" }
	end

	def self.classes
		{ mat: "Matemáticas", sci: "Ciencias Naturales", esp: "Lengua Castellana", soc: "Ciencias Sociales" }		
	end

	
end
