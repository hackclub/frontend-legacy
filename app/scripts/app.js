'use strict';

angular.module('hackeduApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
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
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider,
                    $httpProvider, USER_ROLES, AngularyticsProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        data: {
          authorizedRoles: USER_ROLES.guest
        }
      })
      .state('apply', {
        url: '/apply',
        templateUrl: 'views/apply.html',
        controller: 'ApplyCtrl',
        data: {
          authorizedRoles: USER_ROLES.guest
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        data: {
          authorizedRoles: USER_ROLES.guest
        }
      })
      .state('team', {
        url: '/team',
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        data: {
          authorizedRoles: USER_ROLES.guest
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        data: {
          authorizedRoles: USER_ROLES.guest
        }
      })
      .state('attributions', {
        url: '/attributions',
        templateUrl: 'views/attributions.html',
        controller: 'AttributionsCtrl',
        data: {
          authorizedRoles: USER_ROLES.guest
        }
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
