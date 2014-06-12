'use strict';

angular.module('hackeduApp').
  factory('authInterceptor', function ($rootScope, $q, $cookieStore) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.token) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.token;
        }
        return config;
      },
      response: function (response) {
        if (response.status === 401) {
          // handle the case where the user is not authenticated
        }
        return response || $q.when(response);
      }
    };
  });
