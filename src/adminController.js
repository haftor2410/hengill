angular.module("HengillApp").controller("AdminController", function ($scope, $modal, UsersResource, NewUserDlg, ViewUserDlg, DateCalculator){

	UsersResource.getAllUsers()
	.success(function(data){
		$scope.allUsers = data;

		// calculates how many days each user has left of his contract
		for(var i = 0; i < $scope.allUsers.length; i++){
			$scope.allUsers[i].remaining = DateCalculator.findDayDifference($scope.allUsers[i].newestContract.contractEndString);
		}
	})
	.error(function(){
		//TODO
	});

	$scope.dateLength = 15;

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
			console.log("theeennnn", unsavedUser)
			// if modal is closed: press cancel
			if(unsavedUser === undefined){
				return;
			}

			if(!checkIfUserExists(unsavedUser.id)){
				console.log("not undefined")
				if(unsavedUser.name === undefined){

					//TODO: toaster - username is undefined
					console.log("username undefined");
					return;
				}

				UsersResource.addNewUser(unsavedUser).
				success(function(data){
					$scope.allUsers = data;

					// update how many days left of the contract
					var last = $scope.allUsers.length - 1;
					$scope.allUsers[last].remaining = DateCalculator.findDayDifference($scope.allUsers[last].newestContract.contractEndString);
				});
			}
			else{
				// TODO: toaster - user already exists
				console.log("nonono");
			}
		});
	};

	// $scope.newUserObject = {
	// 	newUserName: undefined,
	// 	socialNumber: undefined
	// }


	$scope.userObject  = { 
		name:          "William",
		id:            6,
		newestContract: {
			contractStartString: undefined,
			contractEndString:   undefined,
			contractStartDateFormat: undefined,
			contractEndDateFormat:   undefined
		},
		allContracts: [],
		remaining:     undefined,
		myClasses:     []
	};




	$scope.saveNewUser = function(){
		console.log("----->", $scope.userObject);
		$scope.$close($scope.userObject);
	}


	$scope.viewUser = function(user, index){
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

