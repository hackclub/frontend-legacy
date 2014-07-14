'use strict';

angular.module('hackeduApp')
  .controller('NavCtrl', function($scope, $location, Auth, Session) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.isAuthenticated = Auth.isAuthenticated;

    $scope.logout = function () {
      Session.destroy();
      // TODO: Go to homepage
      $location.path('/login');
    };
  });
