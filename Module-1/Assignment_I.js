(function (){
    
"use strict"
/// <reference path="angular.min.js" />

angular.module("Assignment_1",  [])
.controller("foodListController", foodListProcessing);


foodListProcessing.$inject = ['$scope'];

function foodListProcessing($scope){
    $scope.message = "";

    $scope.checkFoodItems = function(foodItems){
        var editedFoodItems = [];
        if(foodItems == undefined)
            $scope.message = "Please enter data first!";
        else{
            foodItems = foodItems.split(',');
            foodItems.forEach(element => {
                if(element == ""){
                    return;
                }
                editedFoodItems.push(element);
            });
            if(editedFoodItems.length == 0){
                $scope.message = "Please enter data first!";
                document.getElementById('textbox').style.borderColor = "red";
            }
            else if(editedFoodItems.length <= 3)
            {    $scope.message = "Enjoy!";
                document.getElementById('textbox').style.borderColor = "green";
            }
            else
            {
                $scope.message = "Too Much!";
                document.getElementById('textbox').style.borderColor = "green";
            }    
        }
    }
}

})();
