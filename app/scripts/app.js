'use strict';

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
  // @if DEBUG
  .constant('API_BASE', 'http://localhost:3000')
  // @else
  .constant('API_BASE', 'https://api.hackedu.us')
  // @endif
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })
  .constant('USER_ROLES', {
    admin: 'admin',
    organizer: 'organizer',
    student: 'student',
    guest: 'guest'
  })
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
      .when('/team', {
        templateUrl: 'views/team.html'
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

    $httpProvider.interceptors.push([
      '$injector',
      function ($injector) {
        return $injector.get('authInterceptor');
      }
    ]);
    AngularyticsProvider.setEventHandlers(['GoogleUniversal']);
  })
  .run(function (Angularytics, $rootScope, AUTH_EVENTS, Auth) {
    Angularytics.init();

    $rootScope.$on('$stateChangeStart', function (event, next) {
      var authorizedRoles = next.data.authorizedRoles;

      if (!Auth.isAuthorized(authorizedRoles)) {
        event.preventDefault();

        if (Auth.isAuthenticated()) {
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
        } else {
          $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
        }
      }
    });
  });
