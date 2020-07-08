(function () {
  "use strict";

  angular
    .module("data")
    .controller("CategoriesController", CategoriesController);

  CategoriesController.$inject = ["items"];
  function CategoriesController(items) {
    var mainList = this;
    mainList.items = [];
    var temp_items = items.data;
    console.log(temp_items.length);
    for (var i in temp_items) {
      //console.log(temp_items[i]);
      var this_item = {
        short_name: temp_items[i].short_name,
        name: temp_items[i].name,
      };
      mainList.items.push(this_item);
      //mainList.newitems.push(this_item);
    }
    console.log(mainList.items);
  }
})();
