(function () {
    'use strict';

    angular
        .module('starcraftApp')
        .controller('unitsController', unitsController)
        .controller('unitsAddController', unitsAddController)
        .controller('unitsEditController', unitsEditController)
        .controller('unitsDeleteController', unitsDeleteController);

    unitsController.$inject = ['$scope','Units']; 

    function unitsController($scope, Units) {
        $scope.units = Units.query();
    }

    unitsAddController.$inject = ['$scope', 'Units', '$location'];
    function unitsAddController($scope, Units, $location) {
        $scope.quote = new Unit();
        $scope.addUnit = function () {
            $scope.unit.$save(function () {
                $location.path('/');
            });
        };
    }

    unitsEditController.$inject = ['$scope', 'Units', '$location', '$routeParams'];
    function unitsEditController($scope, Units, $location, $routeParams) {
        $scope.unit = Units.get({ id: $routeParams.id });

        $scope.editUnit = function () {
            $scope.unit.$save(function () {
                $location.path('/');
            });
        };
    }
    unitsDeleteController.$inject = ['$scope', 'Units', '$location', '$routeParams'];
    function unitsDeleteController($scope, Units, $location, $routeParams) {
        $scope.unit = Units.get({ id: $routeParams.id });

        $scope.editUnit = function () {
            $scope.unit.$remove({id:$scope.unit.Id},function () {
                $location.path('/');
            });
        };
    }

})();
