'use strict';

angular.module('hackeduApp')
  .factory('Auth', function ($http, $cookieStore, Session, API_BASE,
                             USER_ROLES) {
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
        // If it's public, then they're good.
        if (authorizedRoles.indexOf(USER_ROLES.guest) !== -1) {
          return true;
        }

        return (this.isAuthenticated() &&
                authorizedRoles.indexOf(Session.userType) !== -1);
      },
    };
  });
