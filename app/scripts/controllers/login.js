'use strict';

/**
 * Login controler
 * @param  {[type]} $scope      Scope of the Login form	
 * @param  {[type]} authService  Authentication service when takes care of login function 
 * @return {[type]}             [description]
 */
app.controller('LoginCtrl', ['$scope', 'AuthenticationService', function ($scope, authService) {
	$scope.credentials = {"email": "", "password": ""};
	$scope.login = function(){
		authService.login($scope.credentials);
	};
}]);
