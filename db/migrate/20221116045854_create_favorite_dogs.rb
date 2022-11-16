class CreateFavoriteDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :favorite_dogs do |t|

      t.timestamps
    end
  end
end
