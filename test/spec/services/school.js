'use strict';

describe('Service: School', function () {

  // load the service's module
  beforeEach(angular.mock.module('hackeduApp'));

  // instantiate service
  var School, $httpBackend, API_BASE;

  beforeEach(inject(function (_School_, _$httpBackend_, _API_BASE_) {
    School = _School_;
    $httpBackend = _$httpBackend_;
    API_BASE = _API_BASE_;
  }));

  describe('query', function () {
    it('should get all the Schools', function () {
      $httpBackend.expectGET(API_BASE + '/schools').respond([
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
