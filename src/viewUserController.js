angular.module("HengillApp").controller("ViewUserController", function ($scope, userObject){
	$scope.userObject = userObject;
	console.log($scope.userObject);

	findMonth = function(month) {

		if(month === "Jan"){
			return 1;
		}
		else if(month === "Feb"){
			return 2
		}
		else if(month === "Mar"){
			return 3
		}
		else if(month === "Apr"){
			return 4
		}
		else if(month === "May"){
			return 5
		}
		else if(month === "Jun"){
			return 6
		}
		else if(month === "Jul"){
			return 7
		}
		else if(month === "Aug"){
			return 8
		}
		else if(month === "Sep"){
			return 9
		}
		else if(month === "Oct"){
			return 10
		}
		else if(month === "Nov"){
			return 11
		}
		else if(month === "Dec"){
			return 12
		}
		
		return undefined;
	};

	formatString = function(format) {
		var dateString = format.toString();
		var day    = parseInt(dateString.substring(7,10));
		var month  = dateString.substring(4,7);
		month = findMonth(month);
		var year   = parseInt(dateString.substring(10,15));
		var date = new Date(year, month, day);
		return date;
	};


	var date2 = new Date(formatString($scope.userObject.contractEnd));
	var date1 = new Date(formatString($scope.userObject.contractStart));
	var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	$scope.dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));

	$scope.newContract = function(){
		console.log("new COntract!!!")
		$scope.newContractBool = !$scope.newContractBool;
	};

});



 //  $scope.dayDiff = function(firstDate,secondDate){
 //      var date2 = new Date($scope.formatString(secondDate));
 //      var date1 = new Date($scope.formatString(firstDate));
 //      var timeDiff = Math.abs(date2.getTime() - date1.getTime());   
 //      $scope.dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
 //      alert($scope.dayDifference);
 // }