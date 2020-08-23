(function(){

"use strict"
angular.module('MenuApp')
.controller('menuCategoriesController',menuCategoriesController);

menuCategoriesController.$inject = ['items'];
 
function menuCategoriesController(items){
    var menuCatCtrl = this;
    menuCatCtrl.items = items;
    console.log(menuCatCtrl.items);
}

})();
