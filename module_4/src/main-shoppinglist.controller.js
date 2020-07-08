(function () {
  "use strict";

  angular
    .module("data")
    .controller("MainShoppingListController", MainShoppingListController);

  MainShoppingListController.$inject = ["MenuDataService"];
  function MainShoppingListController(MenuDataService) {
    var mainList = this;
    mainList.items = [];
    mainList.newitems = [];
    mainList.$onInit = function () {
      MenuDataService.getAllCategories().then(function (result) {
        var temp_items = result.data;
        //console.log(temp_items.length);
        for (var i in temp_items) {
          //console.log(temp_items[i]);
          var this_item = {
            short_name: temp_items[i].short_name,
            name: temp_items[i].name,
          };
          mainList.items.push(this_item);
          mainList.newitems.push(this_item);
        }
        //console.log(mainList.items);
      });
    };

    mainList.somefn = function (index) {
      var this_item_1 = mainList.items[index];
      console.log("something working" + this_item_1.short_name);
      MenuDataService.getItemsForCategory(this_item_1.short_name).then(
        function (result) {
          var temp_items_1 = result.data.menu_items;
          for (var i in temp_items_1) {
            var this_item_1 = {
              short_name: temp_items_1[i].short_name,
              name: temp_items_1[i].name,
              desc: temp_items[i].description,
            };
            mainList.newitems.push(this_item_1);
          }
          console.log("final list " + mainList.newitems.length);
        }
      );
    };
  }
})();
