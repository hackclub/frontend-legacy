'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('hackeduApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a message to the scope', function () {
    expect(scope.message).toNotBe(null);
  });
});
