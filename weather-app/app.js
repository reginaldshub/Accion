const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			strig: true
		}
})
	.help()
	.alias('help','h')
	.argv;
geocode.geocodeAddress(argv ,(errorMessage, results) => {
	if(errorMessage){
		console.log(errorMessage);
	}else{
		console.log("weather at "+  JSON.stringify(results.address));
		weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
			if(errorMessage){
				console.log(errorMessage);
			}else{
					console.log("is "+(weatherResults.temperature - 32) * (0.55) +" and Feels like "+(weatherResults.apparentTemperature - 32) * (0.55));
				}
		});

	}
});
