app.controller("checkoutCtrl", function ($scope, $rootScope, $location, $http) {
  $scope.checkout = function () {
    $http
      .post("http://localhost:3000/orders", {
        name: $scope.name,
        address: $scope.address,
        phone: $scope.phone,
        products: $rootScope.cart,
        id_user: $rootScope.user.id,
        total: $rootScope.calculateTotalPrice(),
        date: new Date().toLocaleString("sv-SE"),
        status: "Order",
        comment: $scope.comment
      })
      .then(function (response) {
        $rootScope.clearCart();
        $location.path("/order");
      });
  };
});
