const angular = require('angular');
const style = require('./css/style.css');
const grid = require('./css/grid.css');
const normalize = require('./css/normalize.css');

//services
const WeatherService = require('./services/weather.service');
const ImageService = require('./services/images.service');

//components
const CurrentWeatherComponent = require('./components/current-weather');
const DailyWeatherComponent = require('./components/daily-weather');
const HourlyWeatherComponent = require('./components/hourly-weather');
const SearchComponent = require('./components/search');
const MainAppComponent = require('./components/main-app');

//create our application
angular.module('darkcaster-client',[]) //setter syntax
       .factory('WeatherService', WeatherService)
       .factory('ImageService', ImageService)
       .component('currentWeather', CurrentWeatherComponent)
       .component('dailyWeather', DailyWeatherComponent)
       .component('hourlyWeather', HourlyWeatherComponent)
       .component('getWeather', SearchComponent)
       .component('mainApp', MainAppComponent);