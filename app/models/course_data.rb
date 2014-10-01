class CourseData < ActiveRecord::Base
	belongs_to :course
	belongs_to :template
end
