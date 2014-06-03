'use strict';

var apiBase = 'https://api.hackedu.us';

// @if DEBUG
apiBase = 'http://localhost:3000';
// @endif

// TODO: Find a better way to do this, but this prevents Grunt from complaining
var userRoles;
userRoles = {
  public: undefined,
  admin: 1,
  organizer: 2,
  student: 3
};

angular.module('hackeduApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'google-maps',
  'angularytics',
  'mm.foundation'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider,
                    AngularyticsProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/apply', {
        templateUrl: 'views/apply.html',
        controller: 'ApplyCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/attributions', {
        templateUrl: 'views/attributions.html',
        controller: 'AttributionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('!');

    if (window.history && window.history.pushState) {
      $locationProvider.html5Mode(true);
    }

    $httpProvider.interceptors.push('authInterceptor');
    AngularyticsProvider.setEventHandlers(['GoogleUniversal']);
  })
  .run(function (Angularytics) {
    Angularytics.init();
  });
