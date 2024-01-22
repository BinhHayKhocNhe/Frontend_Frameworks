var app = angular.module("myApp", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html"
        })
        .when("/about", {
            templateUrl: "about.html"
        })
        .when("/contact", {
            templateUrl: "contact.html"
        })
        .when("/feedback", {
            templateUrl: "feedback.html"
        })
        .when("/faq", {
            templateUrl: "faq.html"
        })
        .when("/login", {
            templateUrl: "/pages/Bai_2/account/login.html"
        })
        .when("/register", {
            templateUrl: "/pages/Bai_2/account/register.html"
        })
        .when("/forgot", {
            templateUrl: "/pages/Bai_2/account/forgot.html"
        })
        .when("/logoff", {
            templateUrl: "/pages/Bai_2/account/logoff.html"
        })
        .when("/changePassword", {
            templateUrl: "/pages/Bai_2/account/changePassword.html"
        })
        .when("/profile", {
            templateUrl: "/pages/Bai_2/account/profile.html"
        })
        .when("/orders", {
            templateUrl: "/pages/Bai_2/account/orders.html"
        })
        .when("/products", {
            templateUrl: "/pages/Bai_2/account/products.html"
        })
        .when("/category/:id", {
            templateUrl: "ProductList.html",
            controller: "categoryCtrl"
        })
        .when("/supplier/:id", {
            templateUrl: "ProductList.html",
            controller: "supplierCtrl"
        })
        .when("/special/:id", {
            templateUrl: "ProductList.html",
            controller: "specialCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });
});
app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    });
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.loading = false;
        alert("Lỗi");
    });
});