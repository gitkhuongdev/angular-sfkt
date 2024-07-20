app.controller("blogCtrl", function ($scope,$http, $rootScope) {
    $rootScope.listBlog = [];
    $http.get("http://localhost:3000/news").then(function (response) {
      $rootScope.listBlog = response.data;
    });
  });
  