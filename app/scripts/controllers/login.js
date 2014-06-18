'use strict';

angular.module('hackeduApp')
  .controller('LoginCtrl', function ($scope, $rootScope, AUTH_EVENTS, Auth, User, School) {
    
    angular.element(document).ready(function ($window) {
      var pxMapHeight =  document.documentElement + "px";
      $('.angular-google-map-container').css({ height: pxMapHeight });
    });

    $scope.map = {
      center: {
        latitude: 39,
        longitude: -101
      },
      zoom: 4,
      schools: School.query()
    };

    $scope.message = '';
    $scope.submit = function (user) {
      Auth.login(user).then(function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $rootScope.currentUser = User.me();
        $scope.message = 'Login successful!';
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        $scope.message = 'Error: invalid email or password';
      });
    };
  });
  