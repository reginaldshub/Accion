const request = require('request');

var getWeather = (lat, lng, callback) =>{
request({
	url:`https://api.darksky.net/forecast/cfb8c3d61e78ed6c0a7da29c161e97e6/${lat},${lng}`,
	json: true
}, (error, response, body) => {
	if(!error && response.statusCode == 200){
		callback(undefined, {
			temperature: body.currently.temperature,
			apparentTemperature: body.currently.apparentTemperature
		});
	}else{
		callback("unable to fetch data");
	}
		
});
}
module.exports.getWeather = getWeather;
