angular.module('what2watchApp')
.controller('topRatedMoviesCtrl', function($scope,$http,constant,callService,$routeParams){
  var url = 'https://api.themoviedb.org/3/movie/'+$routeParams.id+'?api_key='+constant.api_key;
  if($routeParams.id !== undefined){
    callService.getData(url).then(function(data){
      $scope.mainPoster = data;
    });
  }
  
  $scope.getTopRatedMovies = function() {
    var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key='+constant.api_key;
    callService.getData(url).then(function(data){
      $scope.topRated_movies = data.results;
      if($routeParams.id === undefined) {
        $scope.getDetails(data.results[0].id,'movie');
      }
    });
  }

  $scope.getDetails = function(id,type) {
    var url = 'https://api.themoviedb.org/3/'+type+'/'+id+'?api_key='+constant.api_key;
    callService.getData(url).then(function(data){
      $scope.mainPoster = data;
    });
  }
});