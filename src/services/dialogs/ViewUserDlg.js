"use strict";

angular.module("HengillApp").factory("ViewUserDlg",
function($modal) {
	return {
		show: function show(userObject) {
			console.log("=!=!=!==!=")
			var modalInstance = $modal.open( {
				controller:  "AdminController",
				templateUrl: "src/dialogs/view-user-dlg.tpl.html",
				windowClass: "view-user-modal",
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