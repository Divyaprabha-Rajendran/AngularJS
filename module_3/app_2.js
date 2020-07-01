(function () {
'use strict';


angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);



function FoundItemsDirective() {
  var ddo = {
    template: '{{ item }}',
  };

  return ddo;
}




NarrowItDownController.$inject = ['$scope','MenuSearchService'];
function NarrowItDownController($scope,MenuSearchService) {
  var menu = this;
  menu.found =[];


  menu.findMenuItems = function(){
    var to_find = $scope.to_find;
    console.log(to_find);
    menu.found.length=0;
    console.log(menu.found.length);
    var promise = MenuSearchService.getMatchedMenuItems();
    promise.then(function (response) {
      menu.response_data=response.data;
      for (var i in menu.response_data.menu_items)
      {
        var menu_name=menu.response_data.menu_items[i].name;
        if (menu_name.toLowerCase().includes(to_find.toLowerCase()))
        {
            menu.found.push(menu_name);
            console.log("I found "+menu_name);
        }
      }
      })
    .catch(function (error) {
      console.log(error);
    })



};

menu.removeItems = function(index){
  console.log(index);
    menu.found.splice(index,1);
};

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
  };
}

})();
