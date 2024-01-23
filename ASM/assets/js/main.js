var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/Tour1", {
            templateUrl: "Tour.html",
            controller: "Tour1",
            controllerAs: "Tour1"
        })
        .when("/GioHang", {
            templateUrl: "GioHang.html",
            controller: "Giohang",
            controllerAs: "Giohang"
        })
        .otherwise({
            redirectTo: "/Tour.html"
            // templateUrl: "Home.html",
            // controller: "ContactController"
        });
});