'use strict';

var apiBase;

angular.module('hackeduApp')
  .factory('User', function ($resource) {
    return $resource(apiBase + '/users/:id', {id: '@id'});
  });
