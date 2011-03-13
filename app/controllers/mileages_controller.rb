class MileagesController < ApplicationController
  
  def index
    @mileage = Mileage.new
    @mileages = Mileage.all
  end
  
  def create
    @mileage = Mileage.create!({ :odometer_value => params["odometer"],
                                 :price_of_gas   => params["price"],  
                                 :gallons        => params["gallons"] })
    
    respond_to do |format|
      format.json { render :json => @mileage}
    end
  
  end
end
