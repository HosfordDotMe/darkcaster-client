const template = require('./search.html');
const controller = require('./search.controller');

const component = {
    controller,
    template,
    bindings: {
        search: '&',
        lat: '=',
        lon: '='
    }
};

module.exports = component;