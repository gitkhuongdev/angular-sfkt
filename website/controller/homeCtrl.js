app.controller("homeCtrl", function ($scope, $http, $rootScope) {
  $scope.categories = [];
  $scope.listProducts = [];
  $scope.filteredProducts = [];
  $scope.selectedCategoryId = 0;

  // Get categories
  $http.get("http://localhost:3000/categories").then(function (response) {
    $scope.categories = response.data;
  });
  // Get products
  $http.get("http://localhost:3000/products").then(function (response) {
    $scope.listProducts = response.data;
    $scope.filterProductsByCategory(0);
  });

  $scope.getCategoryName = function (categoryId) {
    if ($scope.categories) {
      const category = $scope.categories.find((cate) => cate.id == categoryId);
      return category ? category.name : "Unknown";
    }
  };

  $scope.filterProductsByCategory = function (categoryId) {
    $scope.selectedCategoryId = categoryId;
    if (categoryId === 0) {
      $scope.filteredProducts = $scope.listProducts;
    } else {
      $scope.filteredProducts = $scope.listProducts.filter(function (product) {
        return product.category_id == categoryId;
      });
    }
  };

  // $rootScope.presentPrice = function (product) {
  //   var price = parseFloat(product.price);
  //   var sale = parseFloat(product.sale);
  //   if (sale > 0) {
  //     return price - price * (sale / 100);
  //   } else {
  //     return price;
  //   }
  // };

  // // Phân trang
  $scope.limit = 8;
  $scope.firstPage = 1;
  $scope.begin = ($scope.firstPage - 1) * $scope.limit;

  $scope.changePage = function (page) {
    $scope.firstPage = page;
    $scope.begin = ($scope.firstPage - 1) * $scope.limit;
  };

  $scope.totalPages = function () {
    if (
      $scope.filteredProducts &&
      $scope.filteredProducts.length >= $scope.limit
    ) {
      return Math.ceil($scope.filteredProducts.length / $scope.limit);
    } else {
      $scope.changePage(1);
      return 1;
    }
  };

  $scope.pageList = function () {
    if ($scope.totalPages() > 0) {
      let arr = [];
      for (let i = 1; i <= $scope.totalPages(); i++) {
        arr.push(i);
      }
      return arr;
    } else {
      return [];
    }
  };
});
