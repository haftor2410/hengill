"use strict";

angular.module("HengillApp").directive("newContract", function () {
	return {
		restrict: "E",
		templateUrl: "views/partials/new-contract.tpl.html",
		scope: {
			userObject: "=ngModel"
		},
		link: function(scope, attrs, elem) {


			scope.saveUserChanges = function saveUserChanges(){
				console.log("scope.startDate");
			}
			// TODO when the isTeacher/isStudent factory comes
			// scope.isTeacher = true;


			// scope.markAsViewed = function markAsViewed(index) {
			// 	scope.lecturesView.lectures[index].viewed = !scope.lecturesView.lectures[index].viewed;
			// 	scope.$emit("lectureViewed", index);
			// };

			// // Opens the modal and then sends the edited lecture to the controller
			// scope.editLectures = function editLectures(index) {
			// 	LecturesNewDlg.show(scope.lecturesView.lectures[index]).then(function(unsavedLecture) {
			// 		scope.$emit("saveEditedLecture", unsavedLecture, index);
			// 	});
			// };
		}
	};
});