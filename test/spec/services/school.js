'use strict';

describe('Service: School', function () {

  // load the service's module
  beforeEach(angular.mock.module('hackeduApp'));

  // instantiate service
  var School, $httpBackend;

  beforeEach(inject(function (_School_, _$httpBackend_) {
    School = _School_;
    $httpBackend = _$httpBackend_;
  }));

  describe('query', function () {
    it('should get all the Schools', function () {
      $httpBackend.expectGET('http://localhost:8080/v1/schools').respond([
        {
          name: 'First School',
          location: {
            latitude: '1',
            longitude: '1'
          }
        },
        {
          name: 'Second School',
          location: {
            latitude: '2',
            longitude: '2'
          }
        }
      ]);

      var result = School.query();
      
      $httpBackend.flush();

      expect(result.length).toEqual(2);
    });
  });

});
