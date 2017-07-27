const template = require('./daily-weather.html');
const controller = require('./daily-weather.controller');

const component = {
    controller,
    template,
    bindings: {
        weather: '<'
    }
};

module.exports = component;

