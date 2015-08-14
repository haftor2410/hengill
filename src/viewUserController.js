angular.module("HengillApp").controller("ViewUserController", function ($scope, userObject, DateCalculator){
	$scope.userObject = userObject;

	$scope.dayDifference = DateCalculator.findDayDifference($scope.userObject.newestContract.contractEndString);

	$scope.newContract = function(){
		console.log("new COntract!!!")
		$scope.newContractBool = !$scope.newContractBool;
	};

	$scope.saveUserChanges = function(){
		console.log("hahahahhahah");
		$scope.$close($scope.userObject);
	}
});
