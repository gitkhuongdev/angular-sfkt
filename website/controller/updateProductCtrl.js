admin.controller(
  "updateProductCtrl",
  function ($scope, $rootScope, $http, $routeParams, $location) {
    $scope.id = $routeParams.id;
    $rootScope.productsAdmin = [];
    $http
      .get(`http://localhost:3000/products/${$scope.id}`)
      .then(function (response) {
        $rootScope.productsAdmin = response.data;
      });
    $scope.categories = [];
    $http.get("http://localhost:3000/categories").then(function (response) {
      $scope.categories = response.data;
    });
    $scope.updateProduct = function (id) {
      $http
        .patch(
          `http://localhost:3000/products/${$rootScope.productsAdmin.id}`,
          {
            category_id: $scope.selectedCategory,
            name: $scope.productsAdmin.name,
            price: $scope.productsAdmin.price,
            sale: $scope.productsAdmin.sale,
            image_1: $scope.productsAdmin.image_1,
            image_2: $scope.productsAdmin.image_2,
            image_3: $scope.productsAdmin.image_3,
            description: $scope.productsAdmin.description,
            quantity: $scope.productsAdmin.quantity,
          }
        )
        .then(function (response) {
          console.log(response.data);
          $location.path("/addproduct");
        });
    };
  }
);
