app.controller("blogDetailCtrl", function ($scope, $routeParams,$rootScope, $http) {
    $scope.id = $routeParams.id;
    // console.log($scope.listBlog);
    // $scope.blog = $scope.listBlog.find(
    //   (item) => item.id == $scope.id
    // );
    $rootScope.listBlog = [];
    $http.get("http://localhost:3000/news").then(function (response) {
      $rootScope.listBlog = response.data;
    });
    $http
      .get(`http://localhost:3000/news/${$scope.id}`)
      .then(function (response) {
        $scope.blog = response.data;
      });
});
