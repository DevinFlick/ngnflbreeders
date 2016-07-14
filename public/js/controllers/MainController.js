(function(){
  angular.module('ngnflbreeders')
          .controller("MainController", MainControllerF);

  MainControllerF.$inject = ['$scope', 'NFLBreedersService'];

  function MainControllerF($scope, NFLBreedersService){
    var breeders = NFLBreedersService.breeders;
    NFLBreedersService.readAll()
                      .then(function(){
                        breeders = NFLBreedersService.breeders;
                        console.log(breeders);
                      });

    NFLBreedersService.create();
    NFLBreedersService.delete();
    NFLBreedersService.update();
  }
})();
