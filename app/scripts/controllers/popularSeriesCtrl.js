angular.module('what2watchApp')
.controller('popularSeriesCtrl', function($scope,$http,constant,callService,$routeParams){
  var url = 'https://api.themoviedb.org/3/tv/'+$routeParams.id+'?api_key='+constant.api_key;
  if($routeParams.id !== undefined){
    callService.getData(url).then(function(data){
      $scope.mainPoster = data;
    });
  }
  
  $scope.getPopularSeries = function() {
    var url = 'https://api.themoviedb.org/3/tv/popular?api_key='+constant.api_key;
    callService.getData(url).then(function(data){
      $scope.popular_series = data.results;
      if($routeParams.id === undefined) {
        $scope.getDetails(data.results[0].id,'tv');
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
