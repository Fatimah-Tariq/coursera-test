(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'templates/categories.html',
        controller: 'menuCategoriesController as menuCatCtrl',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories().then(function (response) {
              console.log(response.data);
              return response.data;
            })
            .catch(function (error) {
                console.log("Something went terribly wrong.");
            });
        }]
      }
    })
    .state('menuItems', {
        url: '/menuItems/{id}',
        templateUrl: '/templates/menuItems.html',
        controller: 'menuItemsController as menuItemsCtrl',
        resolve: {
          menuIems: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getAllCategories().then(function (response) {
              console.log(response.data);
              return response.data;
            })
            .then(function (items) {
                console.log(items[$stateParams.id]);
                return MenuDataService.getItemsForCategory(items[$stateParams.id]).then(function (response) {
                  console.log(response.data);
                  return response.data.menu_items;
                })  
            });
          }]
        }
    })
  }
    
})();
