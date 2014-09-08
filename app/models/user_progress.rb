class UserProgress < ActiveRecord::Base
	# attr_accessor :name, :grade, :current_grade, :pr_type, :metadata, :user_id
	# validates :name, :current_grade, :pr_type, :user_id, presence: true
	# validates :name, length: { maximum: 50 },
	# 				 uniqueness: true
	# validates :pr_type, :current_grade, :grade, numericality: true

	def self.progress_types
		{ course: 0, guide: 1, lesson: 2, activity: 3 }
	end
end
