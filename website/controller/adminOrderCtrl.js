admin.controller('adminOrderCtrl', function($scope, $http, $rootScope, $routeParams){
    $scope.listOrders = [];
    $http.get('http://localhost:3000/orders').then(
        function(response){
            $scope.listOrders = response.data
        }
        
    )
})