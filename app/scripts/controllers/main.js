'use strict';

angular.module('hackeduApp')
  .controller('MainCtrl', function ($scope, School) {
    $scope.map = {
      center: {
        latitude: 39,
        longitude: -101
      },
      zoom: 4,
      schools: School.query()
    };
    

    angular.forEach($scope.map.schools, function (school) {
      school.closeClick = function () {
        school.showWindow = false;
      };
      school.onClicked = function () {
        school.showWindow = true;
      };
    });
  });
