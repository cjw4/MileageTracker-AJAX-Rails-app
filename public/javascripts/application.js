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
			console.log(jsonResponseObject.mileage.odometer_value);
			var mileage = jsonResponseObject.mileage.odometer_value;
			var odometerSpan = $("<span>").attr("class", "jsvalue").text(odometerValue);
			var priceSpan = $("<span>").attr("class", "jsvalue").text("$" + price);
			var gallonsSpan = $("<span>").attr("class", "jsvalue").text(gallons);
			
			$("#output").append(odometerSpan)
			$("#output").append(priceSpan).append(gallonsSpan);
			$("#output").append(jsonResponse);
		}
	}
	xhr.send(null);
	
	return false;
	});
});