var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
            controller: "home"
        })
        .when("/buyTour", {
            templateUrl: "Buy_Tour.html",
            controller: "buyTour"
        })
        .when("/tour", {
            templateUrl: "Tour.html",
            controller: "Tour"
        })
        .when("/chiTiet", {
            templateUrl: "ChiTiet.html",
            controller: "chiTiet"
        })
        .when("/contact", {
            templateUrl: "Contact.html",
            controller: "contact"
        })
        .when("/cart", {
            templateUrl: "GioHang.html",
            controller: "cart"
        })
        .otherwise({
            redirectTo: "/home"
        });
});