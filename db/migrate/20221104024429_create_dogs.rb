class CreateDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :dogs do |t|
      t.string :breed
      t.string :icon
      t.string :image
      t.string :size
      t.string :group
      t.string :coat_length

      t.timestamps
    end
  end
end
