'use strict';

app.controller('SignupCtrl', ['$scope', 'AuthenticationService', function ($scope, authService) {
	$scope.credentials = {"email": "", "password": ""};
	$scope.signup = function(){
		authService.signup($scope.credentials);
	};
}]);