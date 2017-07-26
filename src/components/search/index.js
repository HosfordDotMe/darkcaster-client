const template = require('./search.html');
const controller = require('./search.controller');

const searchComponent = {
    controller,
    template,
    bindings: {
        search: '&',
        lat: '=',
        lon: '='
    }
}
