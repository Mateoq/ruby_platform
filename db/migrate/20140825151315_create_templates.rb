class CreateTemplates < ActiveRecord::Migration
  def change
    create_table :templates do |t|
      t.string :name, null: false
      t.string :tag, null: false
      t.text :description, null:true
      t.integer :pr_type, default: 0, null: false
      t.boolean :enabled, default: true

      t.timestamps
    end
  end
end
