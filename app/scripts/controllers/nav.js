'use strict';

angular.module('hackedu')
  .controller('NavCtrl', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
