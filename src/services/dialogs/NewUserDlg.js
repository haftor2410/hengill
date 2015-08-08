"use strict";

angular.module("HengillApp").factory("NewUserDlg",
function($modal) {
	return {
		show: function show(userObject) {
			// console.log(userObject)
			var modalInstance = $modal.open( {
				controller:  "AdminController",
				templateUrl: "src/dialogs/new-user-dlg.tpl.html",
				windowClass: "new-user-modal",
				resolve: {
					userObject: function() {
						return userObject;
					}
				}
			});
			return modalInstance.result;
		}
	};
});