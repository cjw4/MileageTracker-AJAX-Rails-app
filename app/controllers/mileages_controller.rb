class MileagesController < ApplicationController
  
  def index
    @time = Time.now
    @mileage = Mileage.new
    @mileages = Mileage.all
  end
  
  def create
    fill_up_cost = params["price"].to_f*params["gallons"].to_f
    @time = Time.new
    @mileage = Mileage.create!({ :odometer_value => params["odometer"],
                                 :price_of_gas   => params["price"],  
                                 :gallons        => params["gallons"],
                                 :time           => "#{@time.strftime('%B %e, %Y')}",
                                 :fill_up_cost   => fill_up_cost })
    
    previous_distance = Mileage.find(@mileage.id - 1).odometer_value 
    @mileage.distance = params["odometer"].to_f - previous_distance
    @mileage.mpg = ((previous_distance / params["gallons"].to_f) * 10**2).round.to_f / 10**2
    
    respond_to do |format|
      format.json { render :json => @mileage}
    end
  
  end
end
