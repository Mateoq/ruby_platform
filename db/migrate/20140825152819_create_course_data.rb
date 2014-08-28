class CreateCourseData < ActiveRecord::Migration
  def change
    create_table :course_data do |t|
      t.text :introduction
      t.text :concepts
      t.text :activities
      t.text :others

      t.timestamps
    end
  end
end
