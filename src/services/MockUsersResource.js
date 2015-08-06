"use strict";
angular.module("HengillApp")
.factory("MockUsersResource", function () {

	// Content
	// var mockLectureContent1 = { title: "Video from the lecture", name: "https://www.youtube.com/watch?v=C4m79m-hzfc", type: "yt", typeTip: "YouTube"};
	// var mockLectureContent2 = { title: "Slides from the lecture on google drive", name: "https://docs.google.com/presentation/d/1-m9g7Ah8urH3dGZ1DtdcU2PQZ3nbEFi8RWtIPi6XweQ/pub?start=false&loop=false&delayms=3000&slide=id.p", type: "drive", typeTip: "GoogleDrive"};
	// var mockLectureContent3 = { title: "Slides on pdf form", name: "https://www.youtube.com/watch?v=C4m79m-hzfc", type: "pdf", typeTip: "pdf"};
	// var mockLectureContent4 = { title: "Slides on power point form", name: "https://www.youtube.com/watch?v=C4m79m-hzfc", type: "ppt", typeTip: "PowerPoint"};

	// Users
	var user1  = { 
		name:          "Haftor",
		id:            1,
		contractStart: new Date(2012, 0, 12),
		contractEnd:   new Date(2015, 0, 12),
		myClasses:     [1, 2, 3, 4]
	};

	var user2  = { 
		name:          "Arnar",
		id:            2,
		contractStart: new Date(2013, 0, 12),
		contractEnd:   new Date(2015, 0, 12),
		myClasses:     [1, 2, 3, 4, 5]
	};
	var user3  = { 
		name:          "Rakel",
		id:            3,
		contractStart: new Date(2012, 0, 12),
		contractEnd:   new Date(2015, 0, 12),
		myClasses:     [1, 2, 3]
	};

	var user4  = { 
		name:          "Lara",
		id:            4,
		contractStart: new Date(2013, 0, 12),
		contractEnd:   new Date(2015, 0, 12),
		myClasses:     [1, 2]
	};

	var user5  = { 
		name:          "Emily",
		id:            5,
		contractStart: new Date(2012, 0, 12),
		contractEnd:   new Date(2015, 0, 12),
		myClasses:     []
	};

	var user6  = { 
		name:          "William",
		id:            6,
		contractStart: new Date(2013, 0, 12),
		contractEnd:   new Date(2015, 0, 12),
		myClasses:     []
	};

	// All Users 
	var mockUsers = [];

	mockUsers.push(user1);
	mockUsers.push(user2);
	mockUsers.push(user3);
	mockUsers.push(user4);
	mockUsers.push(user5);
	mockUsers.push(user6);

	return {
		getAllUsers: function getAllUsers(){
			return mockUsers;
		},
		getUsersByClass: function getUsersByClass() {
			return mockUsers;
		},
		getUserById: function getUserById(id){
			for(var i = 0; i < mockUsers.length; i++){
				if(mockUsers[i].id === id){
					return mockUsers[i];
				}
			}
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
