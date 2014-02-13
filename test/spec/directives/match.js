'use strict';

describe('Directive: match', function () {

  beforeEach(module('hackeduApp'));

  var element, scope;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = angular.element(
      '<form name="form">' +
        '<input name="match" ng-model="match" match="toMatch">' +
      '</form>');
    $compile(element)(scope);
  }));

  it('should set mismatch error when mismatch occurs', function () {
    scope.match = 'foo';
    scope.toMatch = 'bar';
    scope.$digest();
    expect(scope.form.match.$error.mismatch).toBe(true);
  });

  it('should not set mismatch error when match occurs', function () {
    scope.match = 'foo';
    scope.toMatch = 'foo';
    scope.$digest();
    expect(scope.form.match.$error.mismatch).toBe(false);
  });
});
