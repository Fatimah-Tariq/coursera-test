(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('itemsComponent', {
      templateUrl: 'templates/menuItemsComponent.html',
      bindings: {
        menuItems: '<'
     }
    });
    
})();
