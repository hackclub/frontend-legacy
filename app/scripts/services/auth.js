'use strict';

var apiBase, userRoles;

angular.module('hackeduApp')
  .factory('Auth', function ($http, $cookieStore) {
    var token = $cookieStore.get('token');

    return {
      login: function (user, success, error) {
        $http.post(apiBase + '/users/authenticate', user).
          success(function (data) {
            token = data.token;
            $cookieStore.put('token', data.token);
            success(data);
          }).error(error);
      },

      logout: function () {
        token = null;
        $cookieStore.remove('token');
      },

      userRoles: userRoles,
      token: token,
      loggedIn: function () {
        return token !== null && token !== undefined;
      }
    };
  });
