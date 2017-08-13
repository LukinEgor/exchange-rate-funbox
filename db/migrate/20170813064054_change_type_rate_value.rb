class ChangeTypeRateValue < ActiveRecord::Migration[5.0]
  def change
    change_column :rates, :value, :float
  end
end
