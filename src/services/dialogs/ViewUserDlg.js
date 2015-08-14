"use strict";

angular.module("HengillApp").factory("ViewUserDlg",
function($modal) {
	return {
		show: function show(userObject, index) {
			var modalInstance = $modal.open( {
				controller:  "ViewUserController",
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