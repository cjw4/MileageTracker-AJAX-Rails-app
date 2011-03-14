class AddToMileages < ActiveRecord::Migration
  def self.up
    add_column :mileages, :distance, :integer
    add_column :mileages, :mpg, :float
  end

  def self.down
    remove_column :mileages, :distance
    remove_column :mileages, :mpg
  end
end
