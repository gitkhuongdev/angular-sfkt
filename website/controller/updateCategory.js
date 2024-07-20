admin.controller("updateCategoryCtrl", function ($scope, $rootScope, $http, $routeParams, $location) {
    $scope.id = $routeParams.id
    $rootScope.categoriesAdmin = [];
    $http.get(`http://localhost:3000/categories/${$scope.id}`).then(function (response) {
      $rootScope.categoriesAdmin = response.data;
    });
    $scope.categories = [];
    $http.get("http://localhost:3000/categories").then(function (response) {
      $scope.categories = response.data;
    });
    $scope.updateProduct = function(id){
        $http.patch(`http://localhost:3000/categories/${$rootScope.categoriesAdmin.id}`, {

            name: $scope.categoriesAdmin.name,
        })
        .then(function (response) {
          console.log(response.data);
          $location.path("/addcategory");
        });
    }
});
