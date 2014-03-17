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

  it('should attach an empty array of alerts to the scope', function () {
    expect(scope.alerts).toEqual([]);
  });

  it('should successfully close an alert', function () {
    scope.alerts.push({type: 'success', msg: 'It worked!'});
    scope.alerts.push({type: 'danger', msg: 'Oh snap!'});

    scope.closeAlert(1);

    expect(scope.alerts.length).toEqual(1);
  });

  describe('submitting application', function () {
    describe('when valid', function () {
      it('should add a success alert', function () {});
      it('should clear the contents of the form', function () {});
    });

    describe('when invalid', function () {
      it('should add a failure alert', function () {});
      it('should not clear the contents of the form', function () {});
    });
  });
});
