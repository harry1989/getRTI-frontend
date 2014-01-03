'use strict';

app.controller('FileCtrl', ['$scope', 'FileService', 'ngTableParams', function ($scope, FileService, ngTableParams) {
	FileService.get().then(function(data){
		$scope.files = data.data;
		$scope.tableParams = new ngTableParams({
	        page: 1,            // show first page
	        count: 5           // count per page
    		}, 
    		{
		        total: $scope.files.length, // length of data
		        getData: function($defer, params) {
		            $defer.resolve($scope.files.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	        }
    	});
    	$scope.apply();
	});
}]);