'use strict';

describe('Service: School', function () {

  // load the service's module
  beforeEach(angular.mock.module('hackeduApp'));

  // instantiate service
  var School, $httpBackend, apiBase;

  beforeEach(inject(function (_School_, _$httpBackend_, _apiBase_) {
    School = _School_;
    $httpBackend = _$httpBackend_;
    apiBase = _apiBase_;
  }));

  describe('query', function () {
    it('should get all the Schools', function () {
      $httpBackend.expectGET(apiBase + '/schools').respond([
        {
          name: 'First School',
          latitude: '1',
          longitude: '1'
        },
        {
          name: 'Second School',
          latitude: '2',
          longitude: '2'
        }
      ]);

      var result = School.query();
      
      $httpBackend.flush();

      expect(result.length).toEqual(2);
    });
  });

});
