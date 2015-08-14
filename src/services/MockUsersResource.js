"use strict";
angular.module("HengillApp")
.factory("MockUsersResource", function () {

	// Users
	// var user1  = { 
	// 	name:          "Haftor",
	// 	id:            1,
	// 	contractStart: new Date(2012, 11, 1).toString().substring(4,15),
	// 	contractEnd:   new Date(2016, 0, 1).toString().substring(4,15),
	// 	remaining:     undefined,
	// 	myClasses:     [1, 2, 3, 4]
	// };

	// Users
	var user1  = { 
		name:          "Haftor",
		id:            1,
		newestContract: {
			contractStartString: new Date(2012, 11, 1).toString().substring(4,15),
			contractEndString:   new Date(2016, 0, 1).toString().substring(4,15),

			contractStartDateFormat: new Date(2012, 11, 1),
			contractEndDateFormat:   new Date(2016, 0, 1)
		},
		allContracts: [{
			contractStartString: new Date(2012, 11, 1).toString().substring(4,15),
			contractEndString:   new Date(2016, 0, 1).toString().substring(4,15),

			contractStartDateFormat: new Date(2012, 11, 1),
			contractEndDateFormat:   new Date(2016, 0, 1)
			}
		],
		remaining:     undefined,
		myClasses:     [1, 2, 3, 4]
	};

	var user2  = { 
		name:          "Arnar",
		id:            2,
		newestContract: {
			contractStartString: new Date(2012, 11, 1).toString().substring(4,15),
			contractEndString:   new Date(2015, 0, 1).toString().substring(4,15),

			contractStartDateFormat: new Date(2012, 11, 1),
			contractEndDateFormat:   new Date(2015, 0, 1)
		},
		allContracts: [{
			contractStartString: new Date(2012, 11, 1).toString().substring(4,15),
			contractEndString:   new Date(2015, 0, 1).toString().substring(4,15),

			contractStartDateFormat: new Date(2012, 11, 1),
			contractEndDateFormat:   new Date(2015, 0, 1)
			}
		],
		remaining:     undefined,
		myClasses:     [1, 2, 3, 4, 5]
	};
	var user3  = { 
		name:          "Rakel",
		id:            3,
		newestContract: {
			contractStartString: new Date(2012, 11, 1).toString().substring(4,15),
			contractEndString:   new Date(2017, 0, 1).toString().substring(4,15),

			contractStartDateFormat: new Date(2012, 11, 1),
			contractEndDateFormat:   new Date(2017, 0, 1)
		},
		allContracts: [{
			contractStartString: new Date(2012, 11, 1).toString().substring(4,15),
			contractEndString:   new Date(2017, 0, 1).toString().substring(4,15),

			contractStartDateFormat: new Date(2012, 11, 1),
			contractEndDateFormat:   new Date(2017, 0, 1)
			}
		],
		remaining:     undefined,
		myClasses:     [1, 2, 3]
	};

	var user4  = { 
		name:          "Lara",
		id:            4,
		newestContract: {
			contractStartString: new Date(2012, 11, 1).toString().substring(4,15),
			contractEndString:   new Date(2016, 10, 1).toString().substring(4,15),

			contractStartDateFormat: new Date(2012, 11, 1),
			contractEndDateFormat:   new Date(2016, 10, 1)
		},
		allContracts: [{
			contractStartString: new Date(2012, 11, 1).toString().substring(4,15),
			contractEndString:   new Date(2016, 10, 1).toString().substring(4,15),

			contractStartDateFormat: new Date(2012, 11, 1),
			contractEndDateFormat:   new Date(2016, 10, 1)
			}
		],
		remaining:     undefined,
		myClasses:     [1, 2]
	};

	var user5  = { 
		name:          "Emily",
		id:            5,
		newestContract: {
			contractStartString: new Date(2012, 11, 1).toString().substring(4,15),
			contractEndString:   new Date(2015, 3, 1).toString().substring(4,15),

			contractStartDateFormat: new Date(2012, 11, 1),
			contractEndDateFormat:   new Date(2015, 3, 1)
		},
		allContracts: [{
			contractStartString: new Date(2012, 11, 1).toString().substring(4,15),
			contractEndString:   new Date(2015, 3, 1).toString().substring(4,15),

			contractStartDateFormat: new Date(2012, 11, 1),
			contractEndDateFormat:   new Date(2015, 3, 1)
			}
		],
		remaining:     undefined,
		myClasses:     []
	};

	var user6  = { 
		name:          "William",
		id:            6,
		newestContract: {
			contractStartString: new Date(2012, 11, 1).toString().substring(4,15),
			contractEndString:   new Date(2015, 7, 30).toString().substring(4,15),
			contractStartDateFormat: new Date(2012, 11, 1),
			contractEndDateFormat:   new Date(2015, 7, 30)
		},
		allContracts: [{
			contractStartString: new Date(2012, 11, 1).toString().substring(4,15),
			contractEndString:   new Date(2015, 7, 30).toString().substring(4,15),

			contractStartDateFormat: new Date(2012, 11, 1),
			contractEndDateFormat:   new Date(2016, 0, 1)
			}
		],
		remaining:     undefined,
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
		addNewUser: function addNewUser(userObject) {

			// contractStart: new Date(2012, 11, 1).toString().substring(4,15)

			// var tempDate = userObject.newestContract;

			userObject.newestContract.contractStartString = userObject.newestContract.contractStartDateFormat.toString().substring(4,15);
			userObject.newestContract.contractEndString = userObject.newestContract.contractEndDateFormat.toString().substring(4,15);

			userObject.allContracts.push(userObject.newestContract);

			// userObject.newestContract = tempDate;

			mockUsers.push(userObject);
			return mockUsers;
		},
		editUser: function editUser(userObject, index) {
			mockUsers[index] = userObject;
			return mockUsers;
		}
	};
});
