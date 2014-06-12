'use strict';

angular.module('hackeduApp')
  .factory('User', function ($resource, API_BASE) {
    return $resource(API_BASE + '/users/:id', {id: '@id'});
  });
