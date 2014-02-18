'use strict';

describe('Controller: MainCtrl', function () {
  beforeEach(module('hackeduApp'));

  var ctrl, scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a map to the scope', function () {
    expect(scope.map).toNotBe(null);
  });

  it('should attach schools to the scope', function () {
    expect(scope.schools).toNotBe(null);
  });
});

