app.controller("orderCtrl", function ($scope, $rootScope, $location, $http) {
  $scope.orderList = [];
  $http.get("http://localhost:3000/orders").then(function (response) {
    $scope.orderList = response.data;
    console.log($scope.orderList);
  });
  $scope.limit = 3
});
