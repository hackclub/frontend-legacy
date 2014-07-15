'use strict';

angular.module('hackeduApp')
  .factory('Session', function Session($sessionStorage) {
    return {
      create: function (token, userId, userType) {
        $sessionStorage.token = token;
        $sessionStorage.userId = userId;
        $sessionStorage.userType = userType;
      },

      destroy: function () {
        $sessionStorage.$reset();
      },

      token: $sessionStorage.token,
      user: $sessionStorage.userId,
      userType: $sessionStorage.userType
    };
  });
