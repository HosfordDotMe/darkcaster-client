CurrentWeatherController.$inject = ['WeatherService'];
const clearDay = require('../../images/clear-day.svg');
const clearNight = require('../../images/clear-night.svg');
const cloudy = require('../../images/cloudy.svg');
const fog = require('../../images/fog.svg');
const partlyCloudyDay = require('../../images/partly-cloudy-day.svg');
const partlyCloudyNight = require('../../images/partly-cloudy-night.svg');
const rain = require('../../images/rain.svg');
const sleet = require('../../images/sleet.svg');
const snow = require('../../images/snow.svg');

function CurrentWeatherController(weather){
    this.lat = 0;
    this.lon = 0;
    this.imageLookup = {
        'clear-day': clearDay,
        'clear-night': clearNight,
        'cloudy': cloudy,
        'fog': fog,
        'partly-cloudy-day': partlyCloudyDay,
        'partly-cloudy-night': partlyCloudyNight,
        'rain': rain,
        'sleet': sleet,
        'snow': snow
    };
    this.search = function search(){
        weather.getCurrentWeather(this.lat,this.lon)
               .then(currentWeather => this.weatherData = currentWeather);
    };
};

module.exports = CurrentWeatherController;