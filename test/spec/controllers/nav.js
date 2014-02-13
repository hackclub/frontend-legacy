'use strict';

describe('Controller: NavCtrl', function () {
  beforeEach(module('hackeduApp'));

  var ctrl, scope, rootScope, location;

  beforeEach(inject(function ($location, $controller, $rootScope) {
    location = $location;
    rootScope = $rootScope;
    scope = $rootScope.$new();
    ctrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should say when we are on a page', function () {
    location.path('/');
    rootScope.$apply();
    expect(scope.isActive('/')).toBe(true);

    location.path('/contact');
    rootScope.$apply();
    expect(scope.isActive('/about')).toBe(false);
  });
});
