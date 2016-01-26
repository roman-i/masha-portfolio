'use strict';

/**
 * @ngdoc overview
 * @name mashaPortfolioAngularApp
 * @description
 * # mashaPortfolioAngularApp
 *
 * Main module of the application.
 */
angular
  .module('mashaPortfolioAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
    //,
    //'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/work/:workId', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
