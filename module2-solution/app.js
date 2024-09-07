(function () {
  'use strict';
  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var listToBuy = this;

    listToBuy.listToBuy = ShoppingListCheckOffService.getProductsToBuy();

    listToBuy.addProductBought = function (itemIndex) {
      ShoppingListCheckOffService.addProductBought(itemIndex)
    }
    console.log(listToBuy);
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var listBought = this;

    listBought.listBought = ShoppingListCheckOffService.getProductsBought();

    console.log(listBought);

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var listToBuy = [
      { name: 'baking powde', quantity: '10' },
      { name: 'baking soda', quantity: '2' },
      { name: 'brown sugar', quantity: '5' },
      { name: 'jam', quantity: '9' },
      { name: 'canned tomatoes', quantity: '2' },
      { name: 'tomato paste', quantity: '6' },
      { name: 'cheese', quantity: '4' },
      { name: 'milk', quantity: '20' },
      { name: 'tea', quantity: '30' },
      { name: 'water', quantity: '18' },
      { name: 'wine', quantity: '8' },
    ];

    var listBought = [];

    service.getProductsToBuy = function () {
      return listToBuy;
    }

    service.getProductsBought	= function() {
      return listBought;
    }

    service.addProductBought =function(itemIndex) {
      var item = listToBuy[itemIndex];
      listToBuy.splice(itemIndex,1);
      listBought.push(item);
    }

  }
})();
