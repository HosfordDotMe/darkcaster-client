const htmlTemplate = require('./hourly-weather.html');
const hourlyController = require('./hourly-weather.controller');

const hourlyWeatherComponent = {
    template: htmlTemplate,
    controller: hourlyController
};

module.exports = hourlyWeatherComponent;

