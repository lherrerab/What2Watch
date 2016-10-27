'use strict';

/**
 * @ngdoc overview
 * @name what2watchApp
 * @description
 * # what2watchApp
 *
 * Main module of the application.
 */
angular
  .module('what2watchApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/top_movies', {
        templateUrl: 'views/top_movies.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/top_series', {
        templateUrl: 'views/top_series.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/top_series/:id', {
        templateUrl: 'views/top_series.html',
        controller: 'topRatedC',
        controllerAs: 'main'
      })
      .when('/popular_series', {
        templateUrl: 'views/popular_series.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
