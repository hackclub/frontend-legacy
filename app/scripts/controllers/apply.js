'use strict';

angular.module('hackeduApp')
  .controller('ApplyCtrl', function($scope, $http, User) {
    $scope.user = new User();
    $scope.alerts = [];

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.scrollToTop = function () {
      window.scrollTo(0, 0);
    };

    $scope.createUser = function () {
      $scope.user.$save(
        function () {
          $scope.alerts.push({
            type: 'success',
            msg: 'Application submitted successfully. Expect to hear from ' +
              'us soon!'
          });

          $scope.scrollToTop();
        },
        function () {
          $scope.alerts.push({
            type: 'warning',
            msg: 'Oops, we received your application, but there was an ' +
              'error.'
          });

          $scope.scrollToTop();
        });
    };
  });
