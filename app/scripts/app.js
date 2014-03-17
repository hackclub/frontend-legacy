'use strict';

var apiBase = 'http://api.hackedu.us/v1';

// @if DEBUG
apiBase = 'http://localhost:3000/v1';
// @endif

angular.module('hackeduApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'google-maps',
  'angularytics',
  'mm.foundation'
])
  .config(function ($routeProvider, $locationProvider, AngularyticsProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/apply', {
        templateUrl: 'views/apply.html',
        controller: 'ApplyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('!');

    if (window.history && window.history.pushState) {
      $locationProvider.html5Mode(true);
    }

    AngularyticsProvider.setEventHandlers(['GoogleUniversal']);
  })
  .run(function (Angularytics) {
    Angularytics.init();
  });
