class CourseData < ActiveRecord::Base
  belongs_to :course
  belongs_to :template

  def self.lesson_types
    { intro: 0, concepts: 1, activity: 2, other: 3 }
  end
end
