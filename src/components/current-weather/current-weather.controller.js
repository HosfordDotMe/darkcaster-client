CurrentWeatherController.$inject = ['WeatherService', 'ImagesService'];

function CurrentWeatherController(weather, images){
    this.lat = 0;
    this.lon = 0;
    this.imageLookup = images.lookup;
    this.search = function search(){
        weather.getCurrentWeather(this.lat,this.lon)
               .then(currentWeather => this.weatherData = currentWeather);
    };
};

module.exports = CurrentWeatherController;