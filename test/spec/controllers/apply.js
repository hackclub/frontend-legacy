'use strict';

describe('Controller: ApplyCtrl', function () {

  // load the controller's module
  beforeEach(module('hackeduApp'));

  var ApplyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplyCtrl = $controller('ApplyCtrl', {
      $scope: scope
    });
  }));

  it('should attach an empty user object to the scope', function () {
    expect(scope.user).toEqual({});
  });

  it('should successfully post valid form', function () {});
  it('should unsuccessfully post invalid form', function () {});
});
