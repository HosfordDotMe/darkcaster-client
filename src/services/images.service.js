const clearDay = require('../images/clear-day.svg');		
const clearNight = require('../images/clear-night.svg');		
const cloudy = require('../images/cloudy.svg');		
const fog = require('../images/fog.svg');		
const partlyCloudyDay = require('../images/partly-cloudy-day.svg');		
const partlyCloudyNight = require('../images/partly-cloudy-night.svg');		
const rain = require('../images/rain.svg');		
const sleet = require('../images/sleet.svg');		
const snow = require('../images/snow.svg');

ImageService.$inject = [];

function ImageService() {
    const imageLookup = {
        'clear-day': clearDay,
        'clear-night': clearNight,		
        'cloudy': cloudy,		
        'fog': fog,		
        'partly-cloudy-day': partlyCloudyDay,		
        'partly-cloudy-night': partlyCloudyNight,		
        'rain': rain,		
        'sleet': sleet,		
        'snow': snow
    };
    return {
        lookup: imageLookup
    }
}

module.exports = ImageService;