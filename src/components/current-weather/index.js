const template = require('./current-weather.html');
const controller = require('./current-weather.controller');

const component = {
    template,
    controller,
    bindings: {
        weather: '<'
    }
};

module.exports = component;

