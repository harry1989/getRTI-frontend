'use strict';

angular.module('getRTIApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.search = function(){
    	$location.path('/files');
    };

  });
