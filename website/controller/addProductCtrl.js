admin.controller("addProductCtrl", function ($scope, $rootScope, $http, $routeParams) {
  $rootScope.productsAdmin = [];
  $http.get("http://localhost:3000/products").then(function (response) {
    $rootScope.productsAdmin = response.data;
  });
  $scope.categories = [];
  $http.get("http://localhost:3000/categories").then(function (response) {
    $scope.categories = response.data;
  });

  $scope.addProducts = function () {
    $http.post("http://localhost:3000/products", {
      category_id: $scope.selectedCategory,
      name: $scope.name,
      price: $scope.price,
      sale: $scope.sale,
      image_1: $scope.image_1,
      image_2: $scope.image_2,
      image_3: $scope.image_3,
      description: $scope.description,
      quantity: $scope.quantity,
    });
  };


  $scope.deleteProduct = function(productId) {
    var url = "http://localhost:3000/products/" + productId;
    $http.delete(url)
      .then(function(response) {
        var index = $scope.productsAdmin.findIndex(function(product) {
          return product.id === productId;
        });
        if (index !== -1) {
          $scope.productsAdmin.splice(index, 1);
        }
      })
  };
  
  

  $scope.limit = 10;
});
