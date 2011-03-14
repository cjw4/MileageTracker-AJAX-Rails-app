$(document).ready(function() {
	
	$("#new_mileage").submit(function() {
		
	// get the values from the input fields and set the parameters for the query string
	var odometerValue = $("#mileage_odometer_value").val();
	var price = $("#mileage_price_of_gas").val();
	var gallons = $("#mileage_gallons").val();
	
	var parameters = "?odometer=" + odometerValue + "&price=" + price + "&gallons=" + gallons;
	
	// open a new XMLHttpRequest
	var xhr = new XMLHttpRequest();
	xhr.open("post", "mileages.json" + parameters)
	
	xhr.onreadystatechange = function() {
		// perform callback when server is ready
		if (xhr.readyState == 4) {
			var jsonResponse = xhr.responseText;
			var jsonResponseObject = eval('(' + jsonResponse + ')');
			
			var distance = $("<span>").attr("class", "jscalculated").text(jsonResponseObject.mileage.distance);
			var fill_up = $("<span>").attr("class", "jscalculated").text("$"+jsonResponseObject.mileage.fill_up_cost);
			var mpg = $("<span>").attr("class", "jscalculated").text(jsonResponseObject.mileage.mpg);
			var odometerSpan = $("<span>").attr("class", "jsvalue").text(jsonResponseObject.mileage.odometer_value);
			var priceSpan = $("<span>").attr("class", "jsvalue").text("$" + jsonResponseObject.mileage.price_of_gas);
			var gallonsSpan = $("<span>").attr("class", "jsvalue").text(jsonResponseObject.mileage.gallons);
			
			$("#output").append(odometerSpan)
			$("#output").append(priceSpan).append(gallonsSpan);
			$("#output").append(distance).append(fill_up).append(mpg);
		}
	}
	xhr.send(null);
	
	$("#mileage_odometer_value").val("");
	$("#mileage_price_of_gas").val("");
	$("#mileage_gallons").val("");
	
	return false;
	});
});