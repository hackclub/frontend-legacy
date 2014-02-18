'use strict';

var apiBase;

angular.module('hackeduApp')
  .service('School', ['$resource',
    function ($resource) {
      return $resource(apiBase + '/schools/:id', {}, {
        query: { method: 'GET', params: { id: '' }, isArray: true }
      });
    }]);
