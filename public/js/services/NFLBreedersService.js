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


    function createNFLBreeder(breedingCategory, sellsTo, shipsStock, cityState, stockInBreeding, sellableStock, contactBreeder){//description from todos, you need the base info to make the "todo" or breeder
      var info = {
        breedingCategory: breedingCategory,
        sellsTo: sellsTo,
        shipsStock: shipsStock,
        cityState: cityState,
        stockInBreeding: stockInBreeding,
        sellableStock: sellableStock,
        contactBreeder: contactBreeder,
      };
      return $http.post(baseURL+"breeders", info)
                  .then(function(response){
                    getAll();
                  });
    }
    function getAll(){
      return $http.get(baseURL+'breeders')
                  .then(function(response){
                    o.nflBreeders = response.data;
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
