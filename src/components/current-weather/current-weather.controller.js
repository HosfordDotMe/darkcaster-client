CurrentWeatherController.$inject = ['WeatherService'];
const clearDay = require('../../images/clear-day.png');
const clearNight = require('../../images/clear-night.svg');

function CurrentWeatherController(weather){
    this.lat = 0;
    this.lon = 0;
    this.imageLookup = {
        'clear-day': clearDay,
        'clear-night': clearNight
    };
    this.search = function search(){
        weather.getCurrentWeather(this.lat,this.lon)
               .then(currentWeather => this.weatherData = currentWeather);
    };
};

module.exports = CurrentWeatherController;