(function () {
  "use strict";

  angular.module("data").controller("ItemsController", ItemsController);

  ItemsController.$inject = ["result"];
  function ItemsController(result) {
    var mainList = this;
    console.log(result);
    mainList.newitems = [];
    var temp_items_1 = result.data.menu_items;
    for (var i in temp_items_1) {
      var this_item_1 = {
        short_name: temp_items_1[i].short_name,
        name: temp_items_1[i].name,
        desc: temp_items_1[i].description,
      };
      mainList.newitems.push(this_item_1);
    }
    console.log("final list " + mainList.newitems.length);
  }
})();
