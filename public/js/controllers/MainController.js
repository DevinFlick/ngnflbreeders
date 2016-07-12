(function(){
  angular.module('ngnflbreeders')
          .controller("MainController", MainControllerF);

  MainControllerF.$inject = ['$scope', 'NFLBreedersService'];

  function MainControllerF($scope, TodoService){
    var breeders = NFLBreedersService.breeders;
    NFLBreedersService.readAll()

    console.log(breeders);
  }
})();
