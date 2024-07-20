app.controller("inforCtrl", function ($scope, $http, $location, $rootScope) {
  $scope.updateInfor = function (id) {
    $http
      .patch(`http://localhost:3000/users/${$rootScope.user.id}`, {
        firstname: $scope.firstname,
        lastname: $scope.lastname,
        email: $scope.email,
        password: $scope.password,
        address: $scope.address,
      })
      .then(function (response) {
        alert("Update success!");
        // console.log(response.data);
        $location.path("/login");
      });
  };
});
