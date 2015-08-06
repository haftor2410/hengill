"use strict";
angular.module("HengillApp")
.factory("ClassesResource", function (MockClassesResource, UsersResource) {
	return {
		getClassByDateAndClass: function getClassByDateAndClass(time, date) {
			return {
				success: function(fn) {
					fn(MockClassesResource.getClassByDateAndClass(time, date));
					return {
						error: function(fn) {
							return;
						}
					};
				}
			};
		},
		addNewUser: function addNewUser(userId, time, date) {
			return {
				success: function(fn) {
					UsersResource.getUserById(userId).
						success(function(data){
							fn(MockClassesResource.addNewUser(data, time, date));
						})
						.error(function(){
							//TODO
						});
					return {
						error: function(fn) {
							return;
						}
					};
				}
			};
		}
	};
});