const template = require('./hourly-weather.html');
const controller = require('./hourly-weather.controller');

const component = {
    controller,
    template,
    bindings: {
        weather: '<'
    }
};

module.exports = component;

