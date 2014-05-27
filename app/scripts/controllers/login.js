'use strict';

angular.module('hackeduApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.user = { email: '', password: '' };
  });
