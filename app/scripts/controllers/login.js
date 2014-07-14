'use strict';

angular.module('hackeduApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location,
                                     AUTH_EVENTS, Auth, User) {
    $scope.message = '';
    $scope.submit = function (user) {
      Auth.login(user).then(function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $rootScope.currentUser = User.me();
        $scope.message = 'Login successful!';

        $location.path('/');
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        $scope.message = 'Error: invalid email or password';
      });
    };
  });
