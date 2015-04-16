class CreateCourseRegistrations < ActiveRecord::Migration
  def change
    create_table :course_registrations do |t|
      t.belongs_to :user, index: true
      t.belongs_to :course, index: true

      t.timestamps null: false
    end
    add_foreign_key :course_registrations, :users
    add_foreign_key :course_registrations, :courses
  end
end
