'use strict';

angular.module('hackeduApp')
  .controller('MainCtrl', function ($scope, School) {
    $scope.map = {
      center: {
        latitude: 36,
        longitude: -101
      },
      zoom: 4
    };
    
    $scope.schools = School.query();
  });
