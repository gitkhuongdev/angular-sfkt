admin.controller("addCategoryCtrl", function ($scope, $rootScope, $http, $routeParams) {

    $rootScope.categoriesAdmin = [];
    $http.get("http://localhost:3000/categories").then(function (response) {
      $rootScope.categoriesAdmin = response.data;
    });
  
    $scope.addCategory = function () {
      $http.post("http://localhost:3000/categories", {
        name: $scope.name,
      });
    };
  
  
    $scope.deleteCategory = function(categoryId) {
      var url = "http://localhost:3000/categories/" + categoryId;
      $http.delete(url)
        .then(function(response) {
          var index = $rootScope.categoriesAdmin.findIndex(function(category) {
            return category.id === categoryId;
          });
          if (index !== -1) {
            $scope.productsAdmin.splice(index, 1);
          }
        })
    };
    
    
  
    $scope.limit = 10;
  });
  