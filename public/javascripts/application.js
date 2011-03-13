$(document).ready(function() {
	
	$("#new_mileage").submit(function() {
	// get the values from the input fields and set the parameters for the query string
	var odometerValue = $("#mileage_odometer_value").val();
	var price = $("#mileage_price_of_gas").val();
	var gallons = $("#mileage_gallons").val();
	
	var parameters = "?odometer=" + odometerValue + "&price=" + price + "&gallons=" + gallons;
	
	var xhr = new XMLHttpRequest();
	xhr.open("post", "mileages.json" + parameters)
	
	xhr.send(null);
	
	return false;
	});
});