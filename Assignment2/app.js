(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;
  buy.items = ShoppingListCheckOffService.getItems();
  buy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.addItem(itemIndex);
    ShoppingListCheckOffService.removeItem(itemIndex);
    buy.message = ShoppingListCheckOffService.getMessage_1();
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getItems_1();
  bought.message = ShoppingListCheckOffService.getMessage_2();
  console.log(bought.message);
  console.log(bought.items.length)
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var to_buy_items = [
    { name: "cookies", quantity: 1 },
    { name: "Biscuits", quantity: 2 },
    { name: "Chips", quantity: 3 },
    { name: "Coffee", quantity: 4 },
    { name: "Donut", quantity: 5 }
  ];

  var bought_items =[];

  service.addItem = function (itemIndex) {

    var temp=to_buy_items[itemIndex];

     var item = {
      name: temp.name,
      quantity: temp.quantity
    };
    bought_items.push(item);
  };

  service.removeItem = function (itemIndex) {
    to_buy_items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return to_buy_items;
  };

  service.getItems_1 = function () {
    return bought_items;
  };

  service.getMessage_1 = function() {
    if(to_buy_items.length==0)
      return "Everything is bought!";
    else
      return "";

  };
  service.getMessage_2 = function() {
    if(bought_items.length==0)
      return "Nothing bought yet.";
    else
      return "msg2";
  };
}

})();
