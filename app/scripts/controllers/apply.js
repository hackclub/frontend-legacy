'use strict';

var apiBase;

angular.module('hackeduApp')
  .controller('ApplyCtrl', function($scope, $http) {
    $scope.user = {};

    $scope.createUser = function () {
      $http({
        method: 'POST',
        url: apiBase + '/apply',
        data: $scope.user
      });
    };
  });
