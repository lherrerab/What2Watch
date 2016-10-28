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
        templateUrl: 'views/popular_movies.html',
        controller: 'popularMoviesCtrl',
        controllerAs: 'main'
      })
      .when('/popular_movies/:id', {
        templateUrl: 'views/popular_movies.html',
        controller: 'popularMoviesCtrl',
        controllerAs: 'main'
      })
      .when('/top_movies', {
        templateUrl: 'views/top_movies.html',
        controller: 'topRatedMoviesCtrl',
        controllerAs: 'main'
      })
      .when('/top_movies/:id', {
        templateUrl: 'views/top_movies.html',
        controller: 'topRatedMoviesCtrl',
        controllerAs: 'main'
      })
      .when('/top_series', {
        templateUrl: 'views/top_series.html',
        controller: 'topRatedSeriesCtrl',
        controllerAs: 'main'
      })
      .when('/top_series/:id', {
        templateUrl: 'views/top_series.html',
        controller: 'topRatedSeriesCtrl',
        controllerAs: 'main'
      })
      .when('/popular_series', {
        templateUrl: 'views/popular_series.html',
        controller: 'popularSeriesCtrl',
        controllerAs: 'main'
      })
      .when('/popular_series/:id', {
        templateUrl: 'views/popular_series.html',
        controller: 'popularSeriesCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
