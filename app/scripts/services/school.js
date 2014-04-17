'use strict';

var apiBase;

angular.module('hackeduApp')
  .factory('School', function ($resource) {
    return $resource(apiBase + '/schools/:id', {}, {
      query: { method: 'GET', params: { id: '' }, isArray: true }
    });
  });
