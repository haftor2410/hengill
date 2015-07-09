var HengillApp = angular.module("HengillApp", ['ngRoute', 'angularMoment']);

HengillApp.config(
	function($routeProvider){
		$routeProvider
		.when("/login", {templateUrl: "views/login.html", controller:"LoginController"})
		// .when('/rooms/:user/', { templateUrl: 'Views/rooms.html', controller: 'RoomsController' })
		// .when('/room/:user/:room/', { templateUrl: 'Views/room.html', controller: 'RoomController' })
		.otherwise({redirectTo: "/login"});
	}
);



// angular.module("HengillApp").controller("HomeController", function($scope){
// 	$scope.message = "Hello world";
// 	$scope.arr = [0,1,2,3,4,5,6,7,8,9,10];
// });

