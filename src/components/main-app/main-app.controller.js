MainAppController.$inject = ['WeatherService'];

function MainAppController(weather){
    this.lat = 0;
    this.lon = 0;
    this.search = search;

    function search(){
        weather.get(this.lat, this.lon)
               .then(weatherData => this.weatherData = weatherData); 
    }
}

module.exports = MainAppController; 