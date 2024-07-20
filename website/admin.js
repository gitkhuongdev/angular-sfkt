var admin = angular.module("myAdmin", ["ngRoute"]);
admin.config(function ($routeProvider) {
  $routeProvider
    .when("/addproduct", {
      templateUrl: "view/addproduct.html?" + Math.random(),
      controller: "addProductCtrl",
    })
    .when("/updateproduct/:id", {
        templateUrl: "view/updateproduct.html?" + Math.random(),
        controller: "updateProductCtrl",
      })
      .when("/addcategory", {
        templateUrl: "view/addcategory.html?" + Math.random(),
        controller: "addCategoryCtrl",
      })
      .when("/updatecategory/:id", {
        templateUrl: "view/updatecategory.html?" + Math.random(),
        controller: "updateCategoryCtrl",
      })
      .when("/adminorder", {
        templateUrl: "view/adminorder.html?" + Math.random(),
        controller: "adminOrderCtrl",
      })
      .when("/updateorder/:id", {
        templateUrl: "view/updateorder.html?" + Math.random(),
        controller: "updateOrderCtrl",
      })
      .when("/admincontact", {
        templateUrl: "view/admincontact.html?" + Math.random(),
        controller: "adminContactCtrl",
      })
    
});

