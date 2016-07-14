(function(){
  angular.module('ngnflbreeders')
          .factory("NFLBreedersService", NFLBreedersServiceF);

  NFLBreedersServiceF.$inject = ['$http'];

  function NFLBreedersServiceF($http){
    var baseURL = 'https://nflbreederdb.herokuapp.com/'; // make sure ending slash is here
    var o = {
      create: createNFLBreeder,
      readAll: getAll,
      update: updateNFLBreeder,
      delete: deleteNFLBreeder,
      nflBreeders: []
    };
    return o;


    function createNFLBreeder(breedingCategoryP, sellsToP, shipsStockP, cityStateP, stockInBreedingP, sellableStockP, contactBreederP){//description from todos, you need the base info to make the "todo" or breeder
      var info = {
        breedingCategory: breedingCategoryP,
        sellsTo: sellsToP,
        shipsStock: shipsStockP,
        cityState: cityStateP,
        stockInBreeding: stockInBreedingP,
        sellableStock: sellableStockP,
        contactBreeder: contactBreeder,
      };
      return $http.post(baseURL+"breeders", info)
                  .then(function(response){
                    getall();
                  });
    }
    function getAll(){
      return $http.get(baseURL+'breeders')
                  .then(function(response){
                    o.breeders = response.data;
                  });
    }
    //var newTodo = {
    //  description: "a new description or the old one"
    //  isComplete: "new complete status or at least the old one"
    //};
    function updateNFLBreeder(id, newBreeder){
      return $http.put(baseURL + "breeders/" + id, newBreeder)
                  .then(function(response){
                    getAll();
                  });
    }

    function deleteNFLBreeder(id){
      return $http.delete(baseURL + "breeders/" +id)
                  .then(function(response){
                    getAll();
                  })
    }
  }
})()
