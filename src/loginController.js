HengillApp.controller("LoginController", function ($scope){
	$scope.log = "Hello LOG";

	$scope.tempUsers = [
		{
			name:        "Siggi",
			kt:          2410872989,
			contractExp: new Date()
		}
	];
	console.log($scope.tempUsers, "<-----");
	$scope.date1;
	$scope.date2;

	console.log("date1: ", $scope.date1);
	console.log("date2: ", $scope.date2);
});

