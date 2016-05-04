(function () {
    'use strict';

    var unitsService = angular.module('unitsService', ['ngResource']);

    unitsService.factory('Units', ['$resource', function ($resource) {
        return $resource('/api/units/', {}, {
            query: { method: 'GET', isArray: true }
        });
    }]);
})();