"use strict";
angular.module("HengillApp")
.factory("UsersResource", function (MockUsersResource) {
	return {
		getAllUsers: function getAllUsers(){
			return {
				success: function(fn) {
					fn(MockUsersResource.getAllUsers());
					return {
						error: function(fn) {
							return;
						}
					};
				}
			};
		},
		getUsersByClass: function getUsers() {
			return mockUsers;
		},
		getUserById: function getUserById(id){
			return {
				success: function(fn) {
					fn(MockUsersResource.getUserById(id));
					return {
						error: function(fn) {
							return;
						}
					};
				}
			};
		},
		newUser: function newUser(userObject) {
			mockUsers.push(userObject);
			return mockUsers;
		},
		editUser: function editUser(userObject, index) {
			mockUsers[index] = userObject;
			return mockUsers;
		}
	};
});
