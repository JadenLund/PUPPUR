class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :name
      t.string :summary
      t.integer :likes
      t.integer :client_id
      t.integer :dog_id

      t.timestamps
    end
  end
end
