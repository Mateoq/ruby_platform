class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :name, null: false
      t.integer :type, null: false, default: 0
      t.string :url, null: true
      t.text :metadata, null: true
      t.integer :parent_id, default: 0
      t.integer :template_id, default: 0
      t.boolean :enabled, default: true

      t.timestamps
    end
  end
end
