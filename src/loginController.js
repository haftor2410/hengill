angular.module("HengillApp").controller("LoginController", function ($scope, UsersResource, ClassesResource){

	$scope.currentUserId  = undefined;

	// TODO: should be the next class scheduled
	$scope.currentClass = undefined;

	$scope.datePicked   = new Date(2015, 7, 6);

	$scope.currentClassTime = undefined;

	UsersResource.getAllUsers()
		.success(function(data) {
		$scope.allUsers = data;
	})
	.error(function(){
		//TODO
	});

	// $scope.hehe = MockClassesResource.getClasses();



	$scope.login = function($event) {
		//Not perform check if mouse clicked.
		if($event !== undefined){
			//Check if keydown was enter.
			if($event.keyCode !== 13){
				return;
			}	
		}
		console.log($scope.currentUserId);

		for(var i = 0; i < $scope.allUsers.length; i++){

			if($scope.currentUserId === $scope.allUsers[i].id){
				console.log("a member!");

				// Service call to add the current user to a given class
				ClassesResource.addNewUser($scope.currentUserId, $scope.currentClassTime, $scope.datePicked)
				.success(function(data) {
					$scope.currentClass = data;
				})
				.error(function(){
					//TODO
				});
				break;
			}
			else{
				// TODO: toaster error message
				console.log("not a member");
			}
		}
		$scope.currentUserId = undefined;
	};

	$scope.showUsers = function(classPicked){

		if($scope.datePicked === undefined){
			//TODO toster message
			console.log("Pick a date!");
			return;
		}

		$scope.currentClassTime = classPicked;

		// Service call to find users to who have signed up for a given class
		ClassesResource.getClassByDateAndClass(classPicked, $scope.datePicked)
		.success(function(data) {
			$scope.currentClass = data;
		})
		.error(function(){
			//TODO
		});
	}
});

