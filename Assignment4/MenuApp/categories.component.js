(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('menuCategories', {
      templateUrl: 'templates/menuCategoriesTemplate.html',
      bindings: {
        items: '<'
     }
    });
    
    })();
