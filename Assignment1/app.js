(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.calculateLunch = function () {
    var input = $scope.name;
    console.log(input);
    if (input === "" ) {
      console.log("Please enter data first")
      $scope.result="Please enter data first";
    }
    else if(input.includes(","))
    {
    var split_data = input.split(",");
    if (split_data.length <= 3) {
    $scope.result="Enjoy!";}
    else {
      $scope.result="Too much!";}
   }
   else{
     $scope.result="Enjoy!";
   }
  };
}
})();
