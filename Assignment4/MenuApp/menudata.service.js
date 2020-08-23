(function(){

    "use strict";
    angular.module("MenuApp")
           .service('MenuDataService', MenuDataService );
          
    MenuDataService.$inject = ['$http']
    function MenuDataService($http){
        var service = this;

        service.getAllCategories = function(){
            var service = this;
  
            service.response = $http({
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/categories.json")
            });
        
            return service.response;
      }

      service.getItemsForCategory = function(item){
        var service = this;
        console.log(item);
        service.response = $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + item.short_name)
        });
    
        return service.response;
      }
      // service.getItemsForCategory = function(categoryShortName){
      //     var service = this;
  
      //     service.response = $http({
      //       method: "GET",
      //       url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
      //     });
      
      //     return service.response;
      //   }
        
    }
    
})();
