angular.module("HengillApp").controller("AdminController", function ($scope, UsersResource){

	UsersResource.getAllUsers()
		.success(function(data){
			$scope.allUsers = data;
		})
		.error(function(){
			//TODO
		});

	$scope.showUserInfo = function(u){
		console.log("showUserInfo()", u);
	};

	$scope.sortByName = function(u){
		console.log("sortByName");
	};
	$scope.sortByStartDate = function(u){
		console.log("sortByStartDate");
	};
	$scope.sortByEndDate = function(u){
		console.log("sortByEndDate");
	};
	$scope.sortByNumberOfClasses = function(u){
		console.log("sortByNumberOfClasses");
	};
});

