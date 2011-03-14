class AddTimeToMileage < ActiveRecord::Migration
  def self.up
    add_column :mileages, :time, :string
  end

  def self.down
    remove_column :mileages, :time
  end
end
