class AddImageToUsers < ActiveRecord::Migration
  def change
    add_column :users, :image, :string, limit: 50
  end
end
