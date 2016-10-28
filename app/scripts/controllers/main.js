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
  .controller('searchCtrl', function($scope,$http,constant,callService,$routeParams){
    $scope.getValues = function() {
      $scope.value = "myACcess";
      //console.log($scope.searchValue);
      var url = 'https://api.themoviedb.org/3/search/multi?api_key='+constant.api_key+'&query='+$scope.searchValue;
      callService.getData(url).then(function(data) {
        console.log(data.results);
        $scope.searchListValues = data.results
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
