class CreateRates < ActiveRecord::Migration[5.0]
  def change
    create_table :rates do |t|
      t.string :origin
      t.string :target
      t.integer :value

      t.timestamps
    end
  end
end
