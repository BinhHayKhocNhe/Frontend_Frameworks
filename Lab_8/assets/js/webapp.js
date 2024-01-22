var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "Home.html",
            controller: "HomeController",
            controllerAs: "Home"
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
            templateUrl: "Home.html",
            controller: "ContactController"
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
        alert("Lỗi tải template");
    });
});


app.controller('HomeController', function () {
    this.message = "Trang chủ";
});
app.controller('AboutController', function ($scope) {
    $scope.message = "Trang giới thiệu";
});