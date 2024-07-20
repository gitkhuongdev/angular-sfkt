app.controller("cartCtrl", function ($scope, $rootScope, $location) {
  // Function to update quantity of a product in the cart
  $scope.updateQuantity = function (product) {
    if ($rootScope.user && $rootScope.user.id) {
      var userId = $rootScope.user.id;
      $rootScope.cart =
        JSON.parse(localStorage.getItem("cart_" + userId)) || [];

      var existingProduct = $rootScope.cart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        // Update quantity of the existing product
        existingProduct.quantity = product.quantity;

        // Save updated cart to localStorage
        localStorage.setItem("cart_" + userId, JSON.stringify($rootScope.cart));

        // Reload the cart
        $rootScope.loadCart();
      }
    } else {
      $location.path("/login");
    }
  };
});
