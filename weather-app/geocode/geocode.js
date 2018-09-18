const request = require('request');
geocodeAddress = (addres, callback) => {
var encodedAddress = encodeURIComponent(addres.a);
console.log(encodedAddress);
request({
	url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
}, (error, response, body) => {
	if(error){
		callback('Unable to connect\n check ur internet OR \n try reloading!!!');
	}else if(body.status == 'ZERO_RESULTS'){
		callback('Location Not Registered');
	}else if(body.status == "OVER_QUERY_LIMIT"){
		console.log("reload");

	}else if(body.status == 'OK'){
		callback(undefined, {address: body.results[0].formatted_address,
		latitude: body.results[0].geometry.location.lat,
		longitude: body.results[0].geometry.location.lng
          });
	}else {
	console.log("I DOn KnoW");
}
});
}
module.exports.geocodeAddress = geocodeAddress;
//cfb8c3d61e78ed6c0a7da29c161e97e6