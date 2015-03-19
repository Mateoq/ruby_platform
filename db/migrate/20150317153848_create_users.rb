class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :first_name, null: false
      t.string :middle_name 
      t.string :surnames, null: false
      t.integer :personal_id, null: false
      t.string :gender, null: false, limit: 1
      t.string :email, null: false
      t.string :telephone, limit: 20
      t.string :mobile_phone, limit: 20
      t.integer :role, default: 3, limit: 1
      t.boolean :enabled, default: true

      t.timestamps null: false
    end
  end
end
