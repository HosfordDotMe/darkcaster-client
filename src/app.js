const angular = require('angular');

//create our application
angular.module('darkcaster-client',[]); //setter syntax

angular.module('darkcaster-client') //getter angular's version of require
       .controller('MainController', MainController);

MainController.$inject = [];

function MainController(){
    this.message = 'hello from angular';
};