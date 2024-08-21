(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("CheckerController", CheckerController);

  CheckerController.$inject = ["$scope"];
  function CheckerController($scope) {
    $scope.inputText = "";
    $scope.message = "";

    $scope.haveForLunch = function () {
      var validateTetx = validateArray($scope.inputText);
      $scope.message = validateTetx;
    };

    function validateArray(string) {
        var rta ="";
      if (string === "") {
        rta = "Please enter data first!";
      } else if (string.split(",").filter((x) => x != "").length <= 3) {
          rta = "Enjoy! "+validateEmttySpaceArray(string.split(","));
          
        
      } else if (string.split(",").filter((x) => x != "").length > 3) {
        rta = "Too much!"+validateEmttySpaceArray(string.split(","));
      }
      return rta;
    };

    function validateEmttySpaceArray(array){
        if (array.filter((x) => x != "").length != array.length){
            return " - This value [,,] is not considered, therefore it is not taken into account for the count";
        }
        return "";
    }
  }
})();
