app.controller("mainCtrl", function ($scope, $rootScope, $http, $location) {
  $scope.order = 'name';
  $rootScope.cart = [];
  $rootScope.loadCart = function () {
    if ($rootScope.user && $rootScope.user.id) {
      var userId = $rootScope.user.id;
      $rootScope.cart = JSON.parse(localStorage.getItem("cart_" + userId)) || [];
    } else {
      $rootScope.cart = [];
    }
  };

  $rootScope.loadCart();

  // Hàm thêm sản phẩm vào giỏ hàng
  $scope.addToCart = function (product) {
    if ($rootScope.user && $rootScope.user.id) {
      var userId = $rootScope.user.id;
      $rootScope.cart =
        JSON.parse(localStorage.getItem("cart_" + userId)) || [];

      var existingProduct = $rootScope.cart.find((item) => item.id === product.id);
      var quantity = parseInt(product.quantity_cart) || 1;

      if (!existingProduct) {
        var productCopy = angular.copy(product);
        productCopy.quantity = quantity;
        $rootScope.cart.push(productCopy);
      } else {
        existingProduct.quantity += quantity;
      }

      // Lưu giỏ hàng vào localStorage
      localStorage.setItem("cart_" + userId, JSON.stringify($rootScope.cart));

      // Load lại giỏ hàng từ localStorage
      $rootScope.loadCart();
    } else {
      $location.path("/login");
    }
  };

  // $scope.showDefaultQuantity = false;

  // Hàm tính tiền cho mỗi sản phẩm
  $scope.calculateTotalForProduct = function (product) {
    return (
      product.quantity * (product.price - (product.price * product.sale) / 100)
    );
  };

  $rootScope.calculateTotalPrice = function () {
    var totalPrice = 0;
    for (var i = 0; i < $rootScope.cart.length; i++) {
      var product = $rootScope.cart[i];
      totalPrice += $scope.calculateTotalForProduct(product);
    }
    return totalPrice;
  };

  $rootScope.removeFromCart = function (productId) {
    if ($rootScope.user && $rootScope.user.id) {
      var userId = $rootScope.user.id;
      $rootScope.cart =
        JSON.parse(localStorage.getItem("cart_" + userId)) || [];
      var index = $rootScope.cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        $rootScope.cart.splice(index, 1);
        localStorage.setItem("cart_" + userId, JSON.stringify($rootScope.cart));
        $rootScope.loadCart();
      }
    }
  };

  $rootScope.clearCart = function () {
    if ($rootScope.user && $rootScope.user.id) {
      var userId = $rootScope.user.id;
      localStorage.removeItem("cart_" + userId);
      $rootScope.loadCart();
    }
  };

  if (localStorage.getItem("user")) {
    $rootScope.user = JSON.parse(localStorage.getItem("user"));
  }

  $rootScope.logout = function () {
    localStorage.removeItem("user");
    delete $rootScope.user;
    $location.path("/login");
  };
});
