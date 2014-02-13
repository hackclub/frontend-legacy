'use strict';

angular.module('hackeduApp')
  .controller('NavCtrl', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
