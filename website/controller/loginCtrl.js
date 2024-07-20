app.controller("loginCtrl", function ($scope, $http, $rootScope, $location) {
  // Hàm đăng nhập
  $scope.login = function () {
    $scope.submitted = true;
    if (!$scope.email || !$scope.password) {return}
    $http
      .get(
        `http://localhost:3000/users?email=${$scope.email}&password=${$scope.password}`
      )
      .then(
        function (response) {
          if (response.data.length == 0) {
            $scope.isError = true;
          } else {
            $rootScope.user = response.data[0];
            localStorage.setItem("user", JSON.stringify($rootScope.user));
            $location.path("/");
            $rootScope.loadCart();
          }
        },
        function (response) {
          $scope.isError = true;
        }
      );
  };
});