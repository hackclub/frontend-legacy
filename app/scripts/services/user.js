'use strict';

angular.module('hackeduApp')
  .factory('User', function ($resource, apiBase) {
    return $resource(apiBase + '/users/:id', {id: '@id'});
  });
