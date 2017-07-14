const angular = require('angular');

//services
const WeatherService = require('./services/weather.service');
const ImagesService = require('./services/images.service');

//components
const currentWeatherComponent = require('./components/current-weather/');


//create our application
angular.module('darkcaster-client',[]) //setter syntax
       .factory('WeatherService', WeatherService)
       .factory('ImagesService', ImagesService)
       .component('currentWeather', currentWeatherComponent);