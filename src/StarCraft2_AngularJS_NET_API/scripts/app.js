(function () {
    'use strict';

    angular.module('starcraftApp', [
        // Angular modules 
        'ngRoute',

        // Custom modules 
        "unitsService"
        // 3rd Party Modules
        
    ]);

    angular.module("starcraftApp").config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'partials/units.html',
            controller: 'unitsController'
        })
        .when('/units/add', {
            templateUrl: 'partials/add.html',
            controller: 'unitsAddController'
        })
        .when('/units/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'unitsEditController'
        })
        .when('/units/delete/:id', {
            templateUrl: 'partials/delete.html',
            controller: 'unitsDeleteController'
        });

        $locationProvider.html5Mode(true);
    }]);
})();