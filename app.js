(function() {
  'use strict';  // variables must be declared with a var
  angular.module('LunchCheck', [])
   .controller('LunchCheckController', LunchCheckController);
   LunchCheckController.$inject = ['$scope'];
   function LunchCheckController($scope) {
     $scope.lunch_menu = "";
     $scope.message = "";
     $scope.check = function () {
       var lunchArray = parseLunchMenu($scope.lunch_menu.trim());
       if (lunchArray.length == 0) {
          $scope.message = "";
       } else {
          if (lunchArray.length < 4) {
            $scope.message = "Enjoy!";
          } else {
            $scope.message = "Too Much!";
          }
       }
     };
     // parse text input and push items into lunchArray
     function parseLunchMenu(string) {
       var lunchArray = [];
       var lunchItem = "";
       for (var i=0; i<string.length; i++) {
         if (string[i] == ",") {       // encounter a separatot
           if (lunchItem != "") {
             lunchArray.push(lunchItem.trim()); // push item into lunchArray
             lunchItem = "";
           }
         } else {
           lunchItem += string[i];
           if (i == string.length-1 && lunchItem != "") {
             lunchArray.push(lunchItem.trim());  // push last item
           }
         }
       }  // for loop
       return lunchArray;
     };  // function

    }
})(); // end module Immediately Invoked Function (IIFE)
