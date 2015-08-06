angular.module("HengillApp").controller("AdminController", function ($scope, UsersResource){

	UsersResource.getAllUsers()
		.success(function(data){
			$scope.allUsers = data;
		})
		.error(function(){
			//TODO
		});


});

