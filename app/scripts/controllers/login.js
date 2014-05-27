'use strict';

var apiBase;

angular.module('hackeduApp')
  .controller('LoginCtrl', function ($scope, $http, $window) {
    $scope.message = '';
    $scope.submit = function () {
      $http
        .post(apiBase + '/users/authenticate', $scope.user)
        .success(function (data) {
          $window.sessionStorage.token = data.token;
          $scope.message = 'Welcome!';
        })
        .error(function () {
          delete $window.sessionStorage.token;
          $scope.message = 'Error: invalid email or password';
        });
    };
  });
