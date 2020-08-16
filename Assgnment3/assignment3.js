(function () {
  'use strict';
  
  angular.module('MenuCategoriesApp', [])
  .controller('MenuCategoriesController', MenuCategoriesController)
  .service('MenuCategoriesService', MenuCategoriesService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
  
  MenuCategoriesController.$inject = ['MenuCategoriesService'];
  function MenuCategoriesController(MenuCategoriesService) {
    var menu = this;
    menu.foundItems = [];
  
    menu.FindInMenuList =  function(itemName){
      var promise = MenuCategoriesService.getMenuCategories();
      menu.foundItems = [];
      promise.then(function (response) {
        console.log(response.data);
        for (var i = 0; i < response.data.menu_items.length; i++) {
          var description = response.data.menu_items[i].description;
          if (description.toLowerCase().indexOf(itemName) !== -1) {
            menu.foundItems.push(response.data.menu_items[i]);
          }
        }
        console.log(menu.foundItems );
//        return foundItems;
       
      })
      .catch(function (error) {
        console.log(error);
      })
      console.log(menu.foundItems)   
    };

    menu.removeItem = function (itemIndex) {
      MenuCategoriesService.removeItem(menu.foundItems, itemIndex);
    };

  }
  
  
  MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];
  function MenuCategoriesService($http, ApiBasePath) {
    var service = this;
  
    service.getMenuCategories = function () {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
      });
  
      return response;
    };

    service.removeItem = function (items, itemIndex) {
      items.splice(itemIndex, 1);
    };
  }
  
  })();
