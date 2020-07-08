(function () {
  "use strict";

  angular.module("data").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise("/");

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state("home", {
        url: "/",
        template: "<div>home</div>",
      })

      // Premade list page
      .state("categories", {
        url: "/categories",
        templateUrl: "src/categories.template.html",
        controller: "CategoriesController as mainList",
        resolve: {
          items: [
            "MenuDataService",
            function (MenuDataService) {
              return MenuDataService.getAllCategories();
            },
          ],
        },
      })
      .state("list", {
        url: "/list/{itemId}",
        templateUrl: "src/items.template.html",
        controller: "ItemsController as mainList",
        resolve: {
          result: [
            "$stateParams",
            "MenuDataService",
            function ($stateParams, MenuDataService) {
              console.log($stateParams.itemId);
              return MenuDataService.getItemsForCategory(
                $stateParams.itemId
              ).then(function (result) {
                console.log(result);
                return result;
              });
            },
          ],
        },
      });
  }
})();
