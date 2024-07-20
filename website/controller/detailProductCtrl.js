app.controller(
  "detailProductCtrl",
  function ($scope, $routeParams, $rootScope, $http) {
    // GET theo id

    $scope.id = $routeParams.id;
    // console.log($scope.filteredProducts);
    // $scope.product = $scope.listProducts.find(
    //   (item) => item.id == $scope.id
    // );

    $http
      .get(`http://localhost:3000/products/${$scope.id}`)
      .then(function (response) {
        $scope.product = response.data;
        $scope.selectedCategoryId = 0;
      });
    $http.get("http://localhost:3000/categories").then(function (response) {
      $scope.categories = response.data;
    });
    $http.get("http://localhost:3000/products").then(function (response) {
      var productList = response.data;
      $scope.listProducts = angular.copy(productList);
      $scope.randomProducts = getRandomProducts($scope.listProducts, 4);
      $scope.filterProductsByCategory(0);
    });

    // $scope.presentPrice = function (product) {
    //   var price = parseFloat(product.price);
    //   var sale = parseFloat(product.sale);
    //   if (sale > 0) {
    //     return price - price * (sale / 100);
    //   } else {
    //     return price;
    //   }
    // };

    $scope.getCategoryName = function (categoryId) {
      if ($scope.categories) {
        const category = $scope.categories.find(
          (cate) => cate.id == categoryId
        );
        return category ? category.name : "Unknown";
      }
    };

    $scope.filterProductsByCategory = function (categoryId) {
      $scope.selectedCategoryId = categoryId;
      if (categoryId === 0) {
        $scope.filteredProducts = $scope.randomProducts;
      } else {
        $scope.filteredProducts = $scope.randomProducts.filter(function (
          product
        ) {
          return product.category_id == categoryId;
        });
      }
    };

    function getRandomProducts(products, count) {
      var shuffled = products.slice(0),
        i = products.length,
        min = i - count,
        temp,
        index;
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      return shuffled.slice(min);
    }
    // COMMENT
    $scope.comment = function () {
      $http
        .post("http://localhost:3000/comments", {
          idproduct: $scope.id,
          id_user: $rootScope.user.id,
          name: $rootScope.user.fistname,
          title: $scope.title,
          content: $scope.content,
          date: new Date().toLocaleString(),
        })
        .then(function (response) {
          $scope.content = " ";
          // Cập nhật danh sách bình luận
          $scope.loadComment();
        });
    };

    $scope.listComment = [];
    $scope.loadComment = function () {
      $http
        .get(`http://localhost:3000/comments?idproduct=${$routeParams.id}`)
        .then(function (response) {
          $scope.listComment = response.data;
        });
    };
    $scope.loadComment();

    $scope.limit = 3;
    $scope.deleteComment = function (id) {
      $http
        .delete(`http://localhost:3000/comments/${id}`)
        .then(function (response) {
          $scope.loadComment();
        });
    };
  }
);
