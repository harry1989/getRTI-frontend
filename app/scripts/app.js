'use strict';

var app = angular.module('getRTIApp',[])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/files', {
      	templateUrl : 'views/files.html',
      	controller: 'FileCtrl'
      })
      .when('/login', {
      	templateUrl : 'views/login.html',
      	controller: 'LoginCtrl'
      })
      .when('/signup', {
      	templateUrl : 'views/signup.html',
      	controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });