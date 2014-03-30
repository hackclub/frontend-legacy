'use strict';

describe('Controller: AttributionsCtrl', function () {

  // load the controller's module
  beforeEach(module('hackeduApp'));

  var AttributionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AttributionsCtrl = $controller('AttributionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of icons to the scope', function () {
    expect(scope.icons.length).toBe(3);
  });
});
