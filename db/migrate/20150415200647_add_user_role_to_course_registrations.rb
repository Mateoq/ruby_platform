class AddUserRoleToCourseRegistrations < ActiveRecord::Migration
  def change
    add_column :course_registrations, :user_role, :integer, limit: 1
  end
end
