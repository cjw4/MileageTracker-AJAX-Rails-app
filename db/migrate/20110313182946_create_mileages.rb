class CreateMileages < ActiveRecord::Migration
  def self.up
    create_table :mileages do |t|
      t.float :odometer_value
      t.float :price_of_gas
      t.float :gallons

      t.timestamps
    end
  end

  def self.down
    drop_table :mileages
  end
end
