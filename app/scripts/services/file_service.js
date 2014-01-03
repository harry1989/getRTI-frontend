'use strict';

app.factory('FileService',  function ($http) {
	return {
		get: function(){
			return $http.get('store/files.json');
		}
	};
});