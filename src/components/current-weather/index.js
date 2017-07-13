const htmlTemplate = require('./current-weather.html');
const currentController = require('./current-weather.controller');

const currentWeatherComponent = {
    template: htmlTemplate,
    controller: currentController
};

module.exports = currentWeatherComponent;

