const angular = require('angular');

//services
const WeatherService = require('./services/weather.service');

//components
const currentWeatherComponent = require('./components/current-weather/index');


//create our application
angular.module('darkcaster-client',[]); //setter syntax

angular.module('darkcaster-client') //getter angular's version of require
       .factory('WeatherService', WeatherService)
       .component('currentWeather', currentWeatherComponent);