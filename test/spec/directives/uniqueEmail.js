'use strict';

describe('Directive: uniqueEmail', function () {

  // load the directive's module
  beforeEach(module('hackeduApp'));

  var element,
    scope,
    $httpBackend;

  beforeEach(inject(function ($compile, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    element = angular.element(
      '<form name="form">' +
        '<input name="email" ng-model="email" unique-email>' +
      '</form>');
    $httpBackend = _$httpBackend_;
    $compile(element)(scope);
  }));

  it('should set set uniqueEmail when email is unique', function () {});
  it('should set set uniqueEmail false when email is not unique', function () {});
});
