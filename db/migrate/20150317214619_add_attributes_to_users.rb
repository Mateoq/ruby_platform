class AddAttributesToUsers < ActiveRecord::Migration
  def change
    add_column :users, :metadata, :json
    add_column :users, :password_digest, :string
  end
end
