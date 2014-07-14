'use strict';

angular.module('hackeduApp')
  .controller('NavCtrl', function($scope, $location, Auth) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.isAuthenticated = Auth.isAuthenticated;
  });
