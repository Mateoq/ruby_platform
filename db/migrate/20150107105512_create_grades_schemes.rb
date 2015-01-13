class CreateGradesSchemes < ActiveRecord::Migration
  def change
    create_table :grades_schemes do |t|
      t.string :name, null: false
      t.integer :stage, null: false
      t.text :scheme, null: false
      t.boolean :enabled, default: true

      t.timestamps
    end
  end
end
