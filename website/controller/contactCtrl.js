app.controller("contactCtrl", function ($scope, $http, $location, $rootScope) {
  $scope.contact = function () {
    $http
      .post("http://localhost:3000/contacts", {
        id_user: $rootScope.user.id,
        name: $scope.name,
        title: $scope.title,
        email: $scope.email,
        message: $scope.message,
        phone: $scope.phone,
        date: new Date().toLocaleString("sv-SE"),
      })
      .then(function (response) {
        alert("Your contact have been send");
        $location.path("/");
      });
  };
});
