"use strict";

/* 
 * Might be using a differnet factory for checking file endings + websites
 */

angular.module("HengillApp")
.factory("DateCalculator", function () {
	return {
		findDayDifference: function findDayDifference(endDate) {

			var findMonth = function(month) {

				if(month === "Jan"){
					return 0;
				}
				else if(month === "Feb"){
					return 1;
				}
				else if(month === "Mar"){
					return 2;
				}
				else if(month === "Apr"){
					return 3;
				}
				else if(month === "May"){
					return 4;
				}
				else if(month === "Jun"){
					return 5;
				}
				else if(month === "Jul"){
					return 6;
				}
				else if(month === "Aug"){
					return 7;
				}
				else if(month === "Sep"){
					return 8;
				}
				else if(month === "Oct"){
					return 9;
				}
				else if(month === "Nov"){
					return 10;
				}
				else if(month === "Dec"){
					return 11;
				}
				
				return undefined;
			};

			var formatString = function(format) {
				var dateString = format.toString();
				// console.log("----",dateString.substring(7,11))
				var day    = parseInt(dateString.substring(4,6));
				var month  = dateString.substring(0,3);
				month = findMonth(month);
				var year   = parseInt(dateString.substring(7,11));
				var date = new Date(year, month, day);
				return date;
			};


			var date2 = new Date(formatString(endDate));
			var date1 = new Date();
			var timeDiff = date2.getTime() - date1.getTime();
			return Math.ceil(timeDiff / (1000 * 3600 * 24));
		}
	};
});