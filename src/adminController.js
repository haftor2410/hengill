angular.module("HengillApp").controller("AdminController", function ($scope, $modal, UsersResource, NewUserDlg, ViewUserDlg){

	UsersResource.getAllUsers()
	.success(function(data){
		$scope.allUsers = data;
	})
	.error(function(){
		//TODO
	});

	checkIfUserExists = function(userId){
		for(var i = 0; i < $scope.allUsers.length; i++){
			console.log($scope.allUsers[i].id, "-------", userId)
			if($scope.allUsers[i].id === userId){
				return true;
			}
		}
		return false;
	};



	//------Add new user modal-------
	$scope.addNewUser = function(){
		NewUserDlg.show().then(function(unsavedUser) {

			// if modal is closed: press cancel
			if(unsavedUser === undefined){
				return;
			}

			if(!checkIfUserExists(unsavedUser.socialNumber)){

				if(unsavedUser.newUserName === undefined){

					//TODO: toaster - username is undefined
					console.log("username undefined");
					return;
				}

				UsersResource.addNewUser(unsavedUser).
				success(function(data){
					$scope.allUsers = data;
				});
			}
			else{
				// TODO: toaster - user already exists
				console.log("nonono");
			}
		});
	};

	$scope.newUserObject = {
		newUserName: undefined,
		socialNumber: undefined
	}

	$scope.saveNewUser = function(){
		// console.log($scope.newUserName, "----->");
		$scope.$close($scope.newUserObject);
	}


	$scope.viewUser = function(user, index){
		console.log("viewUser!!!", user, index);
		ViewUserDlg.show(user, index).then(function(){
			console.log("kdbfljsdnflksndlfknasldkfna")
		})
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

