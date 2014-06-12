'use strict';

angular.module('hackeduApp')
  .factory('School', function ($resource, API_BASE) {
    return $resource(API_BASE + '/schools/:id', {}, {
      query: { method: 'GET', params: { id: '' }, isArray: true }
    });
  });
