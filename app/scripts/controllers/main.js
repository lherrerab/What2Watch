'use strict';

/**
 * @ngdoc function
 * @name what2watchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the what2watchApp
 */
angular.module('what2watchApp')
  .constant('constant', {'api_key':'1f78b8bb5bbfaf7c087b3cbd3d2f942f'})
  .controller('MainCtrl', function ($scope,$http,constant,callService) {

    $scope.getPopularMovies = function() {
      var url = 'https://api.themoviedb.org/3/movie/popular?api_key='+constant.api_key;
      callService.getData(url).then(function(data){
        $scope.popular_movies = data.results;
        $scope.getDetails(data.results[0].id,'movie');
      });
    }

    $scope.getTopRatedMovies = function() {
      var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key='+constant.api_key;
      callService.getData(url).then(function(data){
        $scope.topRated_movies = data.results;
        $scope.getDetails(data.results[0].id,'movie');
      });
    }

    $scope.getPopularSeries = function() {
      var url = 'https://api.themoviedb.org/3/tv/popular?api_key='+constant.api_key;
      callService.getData(url).then(function(data){
        $scope.popular_series = data.results;
        $scope.getDetails(data.results[0].id,'tv');
      });
    }

    $scope.getTopRatedSeries = function() {
      var url = 'https://api.themoviedb.org/3/tv/top_rated?api_key='+constant.api_key;
      callService.getData(url).then(function(data){
        $scope.topRated_series = data.results;
        $scope.getDetails(data.results[0].id,'tv');
      });
    }

    $scope.getDetails = function(id,type) {
      var url = 'https://api.themoviedb.org/3/'+type+'/'+id+'?api_key='+constant.api_key;
      callService.getData(url).then(function(data){
        $scope.mainPoster = data;
        console.log(data);
        console.log($scope.mainPoster);
      });
    }

  })
  .factory('callService',function($http, $q){
    return {
      getData: function(url) {
        return $http.get(url).then(function(result){
          return result.data;
        })
        .catch(function(error){
          return $q.reject("Error")
        });
      }
    }
  });
