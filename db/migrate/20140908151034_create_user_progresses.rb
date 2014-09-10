class CreateUserProgresses < ActiveRecord::Migration
  def change
    create_table :user_progresses do |t|
      t.string :name, null: false
      t.float :grade, null: true
      t.string :user_id, null:false
      t.integer :current_grade, null:false
      t.text :metadata, null:true
      t.integer :pr_type, default: 0
      t.integer :parent_id, default: 0

      t.timestamps
    end
  end
end
