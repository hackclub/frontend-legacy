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

    $scope.sponsors = [
      {
        name: 'CodeHS',
        logo: '/images/community.svg'
      },
      {
        name: 'Nitrous.io',
        logo: '/images/community.svg'
      },
      {
        name: 'Rackspace',
        logo: '/images/community.svg'
      },
      {
        name: 'SendGrid',
        logo: '/images/community.svg'
      }
    ];

    angular.forEach($scope.map.schools, function (school) {
      school.closeClick = function () {
        school.showWindow = false;
      };
      school.onClicked = function () {
        school.showWindow = true;
      };
    });
  });
