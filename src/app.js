const angular = require('angular');

//services
const WeatherService = require('./services/weather.service');

//components
const currentWeatherComponent = require('./components/current-weather/');


//create our application
angular.module('darkcaster-client',[]) //setter syntax
       .factory('WeatherService', WeatherService)
       .component('currentWeather', currentWeatherComponent);