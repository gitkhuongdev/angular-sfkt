app.controller("signinCtrl", function ($scope, $http, $location) {
  $scope.signIn = function () {
    $http
      .post("http://localhost:3000/users", {
        firstname: $scope.firstname,
        lastname: $scope.lastname,
        address: $scope.address,
        email: $scope.email,
        password: $scope.password,
        phone: $scope.phone,
        image:
          "https://i.pinimg.com/474x/da/a6/d0/daa6d0c2e1f940fc6d2fd4307373d85d.jpg",
      })
      .then(function (response) {
        $location.path("/login");
      });
  };
});
