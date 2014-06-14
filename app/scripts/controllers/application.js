'use strict';

angular.module('hackeduApp')
  .controller('ApplicationCtrl', function ($scope, $rootScope, USER_ROLES,
                                           Auth) {
    $rootScope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = Auth.isAuthorized;
  });
