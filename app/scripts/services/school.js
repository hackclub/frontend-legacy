'use strict';

angular.module('hackeduApp')
  .factory('School', function ($resource, apiBase) {
    return $resource(apiBase + '/schools/:id', {}, {
      query: { method: 'GET', params: { id: '' }, isArray: true }
    });
  });
