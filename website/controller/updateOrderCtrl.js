admin.controller('updateOrderCtrl', function($scope, $http, $rootScope, $routeParams){
    $rootScope.listOrders = [];
    $scope.id = $routeParams.id
    $scope.orders = [];

    $http.get("http://localhost:3000/orders").then(function (response) {
        $scope.orders = response.data;
      });
    $http.get(`http://localhost:3000/orders/${$scope.id}`).then(
        function(response){
            $rootScope.listOrders = response.data
        }
    )

    $scope.updateOrder = function(id){
        $http.patch(`http://localhost:3000/orders/${$rootScope.listOrders.id}`, {

            status: $scope.selectedStatus,
        })
        .then(function (response) {
          console.log(response.data);
          $location.path("/adminorder");
        });
    }
})