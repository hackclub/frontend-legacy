'use strict';

var apiBase;

angular.module('hackeduApp')
  .controller('ApplyCtrl', function($scope, $http) {
    $scope.user = {};
    $scope.alerts = [];

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.scrollToTop = function () {
      window.scrollTo(0, 0);
    };

    $scope.createUser = function () {
      $http({
        method: 'POST',
        url: apiBase + '/users',
        data: $scope.user
      })
        .success(function () {
          $scope.alerts.push({
            type: 'success',
            msg: 'Application submitted successfully. Expect to hear from ' +
              'us soon!'
          });

          $scope.scrollToTop();
        })
        .error(function () {
          $scope.alerts.push({
            type: 'warning',
            msg: 'Oops, we received your application, but there was an ' +
              'error.'
          });

          $scope.scrollToTop();
        });
    };
  });
