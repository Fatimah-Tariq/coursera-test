// (function(){

// "use strict"
// /// <reference path="angular.min.js" />

// angular.module("ShoppingList",[])
//     .controller("toBuyListController", toBuyList )
    
//     function toBuyList(){
//         var toBuyList = this;

//         toBuyList.boughtList = [];

//         toBuyList.listOfItems = [
//             {name: "cookies", quantity: 10 },
//             {name: "pastries", quantity: 5 },
//             {name: "noodles", quantity: 20 },
//             {name: "peanut butter", quantity: 2 },
//             {name: "chips", quantity: 10 },
//             {name: "choclates", quantity: 15 }
//         ];
        
//         toBuyList.sendToBoughtList = function(index){
//             var boughtItem = toBuyList.listOfItems.splice(index,1);
//             console.log(boughtItem);
//             toBuyList.boughtList.push(boughtItem);
//             console.log(toBuyList.boughtList)
//         }



//     }
    
// })();
(function(){

    "use strict"
    /// <reference path="angular.min.js" />
    
    angular.module("ShoppingList",[])
        .controller("toBuyListController", toBuyList )
        .provider("shoppingListService", shoppingListServiceProvider)
        .config(Config)

        Config.$inject = ['shoppingListServiceProvider'];
        function Config(shoppingListServiceProvider) {
          // Save Yaakov from himself
      //    ShoppingListServiceProvider.defaults.maxItems = 2;
        }
        
        toBuyList.$inject =  ['shoppingListService']
        function toBuyList(shoppingListService){
            var toBuyList = this;
    
            toBuyList.boughtList = shoppingListService.getItems();

            console.log(toBuyList.boughtList);
 
            toBuyList.sendToBoughtList = function (itemIndex, itemName, itemQuantity) {
                shoppingListService.removeItem(itemIndex);
                
                shoppingListService.addItem(itemName, itemQuantity);
                
                toBuyList.secondList = shoppingListService.getSecondList();
                console.log(toBuyList.secondList);
            };
        }

        function shoppingListServiceProvider() {
            var provider = this;
          
            provider.$get = function () {
              var shoppingList = new ShoppingListService();

              return shoppingList;
            };
          }
         
          function ShoppingListService() {
            var service = this;
            var SecondList  = [];
            // List of shopping items
                var items = [
                    {name: "cookies", quantity: 10 },
                    {name: "pastries", quantity: 5 },
                    {name: "noodles", quantity: 20 },
                    {name: "peanut butter", quantity: 2 },
                    {name: "chips", quantity: 10 },
                    {name: "choclates", quantity: 15 }
                ];
          
            service.removeItem = function (itemIndex) {
              items.splice(itemIndex, 1);
            };
        
            service.addItem = function (name, quantity) {
               
                var SecondListItems = {
                    name: name,
                    quantity: quantity
                  };
                  SecondList.push(SecondListItems);
            };

            service.getSecondList = function(){
                return SecondList;
            }
            
            service.getItems = function () {
              return items;
            };
          }
        
    })();
