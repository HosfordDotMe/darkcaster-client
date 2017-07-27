DailyWeatherController.$inject = ['ImageService'];

function DailyWeatherController(images){
    this.lat = 0;
    this.lon = 0;
    this.imageLookup = images.lookup;
};

module.exports = DailyWeatherController;