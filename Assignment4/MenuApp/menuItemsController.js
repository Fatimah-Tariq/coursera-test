(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('menuItemsController', menuItemsController);
    
    // 'item' is injected through state's resolve
    menuItemsController.$inject = ['menuIems']
     function menuItemsController(menuIems) {
        console.log(menuIems);
        var menuItemsCtrl = this;
        menuItemsCtrl.menuItems = [];
    
        for(var i =0; i<menuIems.length;  i++){
            menuItemsCtrl.menuItems.push(menuIems[i])
        }
     console.log(menuItemsCtrl.menuItems);
    }
})();
