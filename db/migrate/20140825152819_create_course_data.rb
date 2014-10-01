class CreateCourseData < ActiveRecord::Migration
  def change
    create_table :course_data do |t|
      t.string :name, null: false
      t.integer :template_id, null: false
      t.text :data, null: true
      t.integer :pr_type, default: 0
      t.integer :course_id, null: false
      t.boolean :enabled, default: true

      t.timestamps
    end
  end
end
