var app = angular.module("myApp", ["ngRoute"]);

//Lấy dữ liệu từ json
app.controller("TourController", function ($scope, $rootScope, $routeParams, $http) {
    $scope.products = [];
    $scope.itemsPerPage = 6;
    $scope.currentPage = 1;
    $http.get("/assets/js/data.json").then(function (response) {
        $scope.products = response.data;
        for (i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id == $routeParams.id) {
                $scope.index = i;
            }
        }

        $scope.totalItems = $scope.products.length;
        $scope.totalPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
        $scope.getPages = function () {
            var pages = [];
            for (var i = 1; i <= $scope.totalPages; i++) {
                pages.push(i);
            }
            return pages;
        };
    });
    //add to cart
    $scope.addCart = function (product) {
        if (typeof $rootScope.cart === 'undefined') {
            $rootScope.cart = [];
        }
        var index = $rootScope.cart.findIndex((item) => item.id == product.id);
        if (index == -1) {
            product.quantity = 1;
            $rootScope.cart.push(product);
            $rootScope.countCart = $rootScope.cart.length;
        } else {
            $rootScope.cart[index].quantity++;
        }
        //count cart
        
        console.log($rootScope.cart);

    }
    // remove to cart
    $scope.deleteCart = function (index) {
        $rootScope.cart.splice(index, 1);
        $rootScope.countCart = $rootScope.cart.length;
    }

    // Hàm giảm giá trị quantity
    $scope.decreaseQuantity = function (product) {
        if (product.quantity > 1) {
            product.quantity--;
        }
    };

    // Hàm tăng giá trị quantity
    $scope.increaseQuantity = function (product) {
        product.quantity++;
    };



    $rootScope.search = function (input) {
        $rootScope.keySearch = input;
    };
});


app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html?",
            controller: "TourController"
        })
        .when("/buyTour", {
            templateUrl: "Buy_Tour.html?",
            controller: "TourController"
        })
        .when("/tour", {
            templateUrl: "Tour.html?",
            controller: "TourController"
        })
        .when("/chiTiet/:id", {
            templateUrl: "ChiTiet.html?",
            controller: "TourController"
        })
        .when("/contact", {
            templateUrl: "Contact.html?",
            controller: "TourController"
        })
        .when("/cart", {
            templateUrl: "GioHang.html?",
            controller: "TourController"
        })
        .otherwise({
            // redirectTo: "/home",
            templateUrl: "home.html",
            controller: "TourController"
        });
});


