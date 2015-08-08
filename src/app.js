var HengillApp = angular.module("HengillApp", ['ngRoute', 'angularMoment', 'ui.bootstrap']);

HengillApp.config(
	function($routeProvider){
		$routeProvider
		.when("/login", {templateUrl: "views/login.html", controller:"LoginController"})
		.when("/admin", {templateUrl: "views/admin.html", controller:"AdminController" })
		// .when('/room/:user/:room/', { templateUrl: 'Views/room.html', controller: 'RoomController' })
		.otherwise({redirectTo: "/login"});
	}
);
