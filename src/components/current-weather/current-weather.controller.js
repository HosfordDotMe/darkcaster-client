MainController.$inject = ['WeatherService'];
const clearDay = require('../../images/clear-day.png');
const clearNight = require('../../images/clear-night.svg');

function MainController(weather){
    this.message = 'hello from angular';
    this.imageLookup = {
        'clear-day': clearDay,
        'clear-night': clearNight
    };
    weather.getCurrentWeather(29,-81)
           .then(currentWeather => this.weatherData = currentWeather);
};

module.exports = MainController;