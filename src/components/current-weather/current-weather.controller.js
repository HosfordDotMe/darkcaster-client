CurrentWeatherController.$inject = ['ImageService'];

function CurrentWeatherController(images){
    this.lat = 0;
    this.lon = 0;
    this.imageLookup = images.lookup;
};

module.exports = CurrentWeatherController;