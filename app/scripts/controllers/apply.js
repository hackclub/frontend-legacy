'use strict';

var apiBase;

angular.module('hackeduApp')
  .controller('ApplyCtrl', function($scope, $http) {
    $scope.user = {};
    $scope.application = {};
    $scope.registrationForm = {
      user: $scope.user,
      application: $scope.application
    };

    $scope.createUser = function () {
      $http({
        method: 'POST',
        url: apiBase + '/apply',
        data: $scope.registrationForm
      });
    };
  });
