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
        templateProvider: function ($http, $templateCache, Session,
                                    USER_ROLES) {
          // consider individual roots and subsequent trees for more
          // complex routes than just the immediate page if necessary
          // increases routing complexity - allows for separate
          // controllers per view
          var getTemplate = function (template) {
            return $http.get(template, {cache:$templateCache})
              .then(function (res) {
                return res.data;
              });
          };

          switch (Session.userType){
            case USER_ROLES.guest:
              return getTemplate('views/main.html');
            case USER_ROLES.organizer:
              return getTemplate('views/organizer/home.html');
            case USER_ROLES.student:
              return getTemplate('views/student/home.html');
            case USER_ROLES.admin:
              return getTemplate('views/admin/home.html');
            // using views/team.html to demonstrate
            default:
              return getTemplate('views/main.html');
          }
        },
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
