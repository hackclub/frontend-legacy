'use strict';

angular.module('hackeduApp')
  .directive('uniqueEmail', function (User) {
    return {
      require:'ngModel',
      restrict: 'A',
      link: function (scope, elem, attrs, ctrl) {
        ctrl.$parsers.push(function (viewValue) {
          if (viewValue) {
            User.get({id:viewValue}, function () {
              ctrl.$setValidity('uniqueEmail', false);
            }, function () {
              ctrl.$setValidity('uniqueEmail', true);
            });
            return viewValue;
          }
        });
      }
    };
  });
