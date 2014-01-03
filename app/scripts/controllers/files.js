app.controller('FileCtrl', ['$scope', 'FileService', function ($scope, FileService) {
	FileService.get().then(function(data){
		$scope.files = data.data;
	})
}]);