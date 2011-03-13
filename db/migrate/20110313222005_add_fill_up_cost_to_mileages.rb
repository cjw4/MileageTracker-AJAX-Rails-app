class AddFillUpCostToMileages < ActiveRecord::Migration
  def self.up
    add_column :mileages, :fill_up_cost, :float
  end

  def self.down
    remove_column :mileages, :fill_up_cost
  end
end
