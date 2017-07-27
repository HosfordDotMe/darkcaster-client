const angular = require('angular');

//services
const WeatherService = require('./services/weather.service');
const ImageService = require('./services/images.service');

//components
const CurrentWeatherComponent = require('./components/current-weather');
const HourlyWeatherComponent = require('./components/hourly-weather');
const SearchComponent = require('./components/search');
const MainAppComponent = require('./components/main-app');

//create our application
angular.module('darkcaster-client',[]) //setter syntax
       .factory('WeatherService', WeatherService)
       .factory('ImageService', ImageService)
       .component('currentWeather', CurrentWeatherComponent)
       .component('hourlyWeather', HourlyWeatherComponent)
       .component('getWeather', SearchComponent)
       .component('mainApp', MainAppComponent);