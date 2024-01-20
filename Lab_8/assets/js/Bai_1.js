var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "Home.html",
            controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "About.html",
            controller: "AboutController"
        })
        .when("/contact", {
            templateUrl: "Contact.html"
        })
        .otherwise({
            redirectTo: "/404",
            controller: "ContactController"
        });
});
app.controller('HomeController', function($scope){
    $scope.message=  "Trang chủ";
});
app.controller('AboutController', function($scope){
    $scope.message=  "Trang giới thiệu";
});