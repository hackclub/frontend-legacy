'use strict';

angular.module('hackeduApp')
  .factory('Auth', function ($http, $cookieStore, Session, API_BASE) {
    return {
      login: function (credentials) {
        return $http
          .post(API_BASE + '/users/authenticate', credentials)
          .then(function (res) {
            Session.create(res.data.token, res.data.id, res.data.type);
          });
      },

      isAuthenticated: function () {
        return !!Session.token;
      },

      isAuthorized: function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
          authorizedRoles = [authorizedRoles];
        }
        return (this.isAuthenticated() &&
                authorizedRoles.indexOf(Session.userRole) !== -1);
      },
    };
  });
