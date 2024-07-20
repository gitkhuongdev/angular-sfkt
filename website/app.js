var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "view/home.html?" + Math.random(),
      controller: "homeCtrl",
    })
    .when("/products", {
      templateUrl: "view/products.html?" + Math.random(),
      controller: "productsCtrl",
    })
    .when("/cart", {
      templateUrl: "view/cart.html?" + Math.random(),
      controller: "cartCtrl",
    })
    .when("/checkout", {
      templateUrl: "view/checkout.html?" + Math.random(),
      controller: "checkoutCtrl",
    })
    .when("/blog", {
      templateUrl: "view/blog.html?" + Math.random(),
      controller: "blogCtrl",
    })
    .when("/blogdetail/:id", {
      templateUrl: "view/blogdetail.html?" + Math.random(),
      controller: "blogDetailCtrl",
    })
    .when("/contact", {
      templateUrl: "view/contact.html?" + Math.random(),
      controller: "contactCtrl",
    })
    .when("/detail/:id", {
      templateUrl: "view/detailproduct.html?" + Math.random(),
      controller: "detailProductCtrl",
    })
    .when("/faq", {
      templateUrl: "view/faq.html?" + Math.random(),
      controller: "faqCtrl",
    })
    .when("/forgot", {
      templateUrl: "view/forgot.html?" + Math.random(),
      controller: "forgotCtrl",
    })
    .when("/infor", {
      templateUrl: "view/infor.html?" + Math.random(),
      controller: "inforCtrl",
    })
    .when("/login", {
      templateUrl: "view/login.html?" + Math.random(),
      controller: "loginCtrl",
    })
    .when("/signin", {
      templateUrl: "view/signin.html?" + Math.random(),
      controller: "signinCtrl",
    })
    .when("/order", {
      templateUrl: "view/order.html?" + Math.random(),
      controller: "orderCtrl",
    })
    .when("/payment", {
      templateUrl: "view/payment.html?" + Math.random(),
      controller: "paymentCtrl",
    })
    .when("/wishlist", {
      templateUrl: "view/wishlist.html?" + Math.random(),
      controller: "wishlistCtrl",
    })
    .when("/admin", {
      templateUrl: "admin.html?" + Math.random(),
    })
});
app.filter("orderByUserId", function () {
  return function (input, user) {
    var filtered = [];
    angular.forEach(input, function (order) {
      if (order.id_user === user.id) {
        filtered.push(order);
      }
    });
    return filtered;
  };
});

app.filter("search", function () {
  return function (input, keyword, attr) {
    let kq = [];
    if (keyword) {
      keyword = keyword.toLowerCase();
      attr.forEach((thuocTinh) => {
        let temp = input.filter(
          (item) =>
            item[thuocTinh].toString().toLowerCase().indexOf(keyword) >= 0
        );
        kq.push(...temp);
      });
    } else {
      kq = input;
    }
    return kq;
  };
});
