(function(){
  angular.module('ngnflbreeders')
          .controller("MainController", MainControllerF);

  MainControllerF.$inject = ['$scope', 'NFLBreedersService'];

  function MainControllerF($scope, NFLBreedersService){
    $scope.nflBreeders = NFLBreedersService.nflBreeders;
    $scope.create = createNFLBreeder;
    $scope.delete = deleteNFLBreeder;
    getNFLBreeders();

    function getNFLBreeders(){
      NFLBreedersService.readAll()
                        .then(function(){
                          $scope.nflBreeders = NFLBreedersService.nflBreeders;
                          console.log($scope.nflBreeders);

                        });
    }
    function createNFLBreeder(breedingCategory, sellsTo, shipsStock, cityState, stockInBreeding, sellableStock, contactBreeder){
      NFLBreedersService.create(breedingCategory, sellsTo, shipsStock, cityState, stockInBreeding, sellableStock, contactBreeder)
                        .then(function(){
                          $scope.breedingCategory = "";
                          $scope.sellsTo = "";
                          $scope.shipsStock = "";
                          $scope.cityState = "";
                          $scope.stockInBreeding = "";
                          $scope.sellableStock = "";
                          $scope.contactBreeder = "";
                          getNFLBreeders();
                        });
    }
    function deleteNFLBreeder(id){
      console.log(id);
      NFLBreedersService.delete(id)
                        .then(function(){
                          getNFLBreeders();
                        });
    }

  }
})();
