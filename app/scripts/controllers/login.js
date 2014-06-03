'use strict';

angular.module('hackeduApp')
  .controller('LoginCtrl', function ($scope, Auth) {
    $scope.message = '';
    $scope.submit = function () {
      Auth.login($scope.user, function () {
        $scope.message = 'Login successful!';
      }, function () {
        $scope.message = 'Error: invalid email or password';
      });
    };
  });
