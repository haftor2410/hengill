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
		addNewUser: function addNewUser(userObject) {
			return {
				success: function(fn) {
					fn(MockUsersResource.addNewUser(userObject));
					return {
						error: function(fn) {
							return;
						}
					};
				}
			};
			mockUsers.push(userObject);
			return mockUsers;
		},
		editUser: function editUser(userObject) {
			return {
				success: function(fn) {
					fn(MockUsersResource.editUser(userObject));
					return {
						error: function(fn) {
							return;
						}
					};
				}
			};
			mockUsers.push(userObject);
			return mockUsers;
		}
	};
});
