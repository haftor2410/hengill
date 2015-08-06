"use strict";
angular.module("HengillApp")
.factory("MockClassesResource", function (UsersResource) {

	// Days
	var mockDay1 = {
		date:    new Date(2015, 7, 20),
		classes: []
	};
	var mockDay2 = {
		date:    new Date(2015, 7, 21),
		classes: []
	};
	var mockDay3 = {
		date:    new Date(2015, 7, 22),
		classes: []
	};

	// Users
	var allUsers = undefined;
	UsersResource.getAllUsers()
		.success(function(data) {
		allUsers = data;
	})
	.error(function(){
		//TODO
	});

	// Classes
	var class1  = { 
		id:          1,
		time:        1,
		users:       [allUsers[1], allUsers[2], allUsers[3]]
	};

	var class2  = { 
		id:          2,
		time:        2,
		users:       [allUsers[0], allUsers[1], allUsers[2]]
	};

	var class3  = { 
		id:          3,
		time:        3,
		users:       [allUsers[2], allUsers[3], allUsers[4]]
	};

	var class4  = { 
		id:          4,
		time:        4,
		users:       [allUsers[3], allUsers[4], allUsers[5]]
	};

	var class5  = { 
		id:          5,
		time:        5,
		users:       []
	};

	var class6  = { 
		id:          6,
		time:        6,
		users:       []
	};

	var class7  = { 
		id:          7,
		time:        7,
		users:       []
	};

	var class8  = { 
		id:          8,
		time:        8,
		users:       []
	};


	mockDay1.classes.push(class1);
	mockDay1.classes.push(class2);
	mockDay1.classes.push(class3);
	mockDay1.classes.push(class4);
	mockDay1.classes.push(class5);
	mockDay1.classes.push(class6);
	mockDay1.classes.push(class7);
	mockDay1.classes.push(class8);

	var mockAllDays = [];
	mockAllDays.push(mockDay1);
	mockAllDays.push(mockDay2);
	mockAllDays.push(mockDay3);

	return {
		getClassByDateAndClass: function getClassByDateAndClass(time, date) {
			var returnClass = undefined;

			var dateStringPicked = date.toString();
			var dateStringChecki = undefined;

			// first find the right date
			for(var i = 0; i < mockAllDays.length; i++){
				if(dateStringPicked == mockAllDays[i].date){

					// then find the right class by time
					for(var j = 0; j < mockAllDays[i].classes.length; j++){
						if(mockAllDays[i].classes[j].time === time){
							return mockAllDays[i].classes[j];
						}
					}
				}
			}
			return;
		},
		addNewUser: function addNewUser(userObject, time, date) {
			var returnClass = undefined;

			var dateStringPicked = date.toString();
			var dateStringChecki = undefined;

			// first find the right date
			for(var i = 0; i < mockAllDays.length; i++){
				if(dateStringPicked == mockAllDays[i].date){

					// then find the right class by time
					for(var j = 0; j < mockAllDays[i].classes.length; j++){
						if(mockAllDays[i].classes[j].time === time){

							// check if the user is already in this class
							for(var k = 0; k < mockAllDays[i].classes[j].users.length; k++){
								if(mockAllDays[i].classes[j].users[k].id === userObject.id){
									//TODO: toaster message: already logged in. Return the same users
									return mockAllDays[i].classes[j];
								}
							}
							// if the user is not in the class, we add and then return
							mockAllDays[i].classes[j].users.push(userObject);
							return mockAllDays[i].classes[j];
						}
					}
				}
			}
			return;
		}
	};
});