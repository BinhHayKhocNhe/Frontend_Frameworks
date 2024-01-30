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
        //  phân trang
        $scope.totalItems = $scope.products.length;
        $scope.totalPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
        $scope.setPage = function (page) {
            $scope.currentPage = page;
        }
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
        var isProductInCart = $rootScope.cart.some((item) => item.id === product.id);
        if (!isProductInCart) {
            // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
            product.quantity = 1;
            $rootScope.cart.push(product);
            $rootScope.countCart = $rootScope.cart.length;
        } else {
            // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
            var index = $rootScope.cart.findIndex((item) => item.id === product.id);
            $rootScope.cart[index].quantity++;
        }
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

    // Bắt sự kiện thanh toán sản phẩm và giá tiền
    $scope.setPaymentType = function (value, totalPrice) {
        $scope.paymentType = value;
        // lưu giá tiền sản phẩm chọn
        $scope.selectedProductTotalPrice = totalPrice;
    };


    // tính tổng tiền
    $scope.getTotalPrice = function () {
        var totalPrice = 0;
        if ($rootScope.cart) {
            $rootScope.cart.forEach(function (product) {
                totalPrice += product.price * product.quantity;
            });
        }
        console.log(totalPrice)
        return totalPrice;
    };

    $scope.sort = 'price'; // Giá trị mặc định
    $scope.onChangeSort = function () {
        switch ($scope.selectedSort) {
            case 'az':
                $scope.sort = '';
                console.log("Tăng dần theo A-Z");
                break;
            case 'za':
                $scope.sort= '-';
                console.log("Giảm dần theo Z-A");
                break;
            case 'lowToHigh':
                $scope.sort = 'price';
                console.log("Từ thấp đến cao");
                break;
            case 'highToLow':
                $scope.sort = '-price';
                console.log("Từ cao đến thấp");
                break;
            default:
                $scope.sort = 'price';
                break;
        }
        // $scope.onChangeSort = function () {
        //     if ($scope.selectedSort === 'az') {
        //         $scope.sort = 'price';
        //         console.log("Tăng dần theo A-Z");
        //     } else if ($scope.selectedSort === 'za') {
        //         $scope.sort = '-price';
        //         console.log("Giảm dần theo Z-A");
        //     } else if ($scope.selectedSort === 'lowToHigh') {
        //         $scope.sort = 'price';
        //         console.log("Từ thấp đến cao");
        //     } else if ($scope.selectedSort === 'highToLow') {
        //         $scope.sort = '-price';
        //         console.log("Từ cao đến thấp");
        //     } else {
        //         $scope.sort = 'price';
        //         console.log("Mặc định");
        //     }
        // };
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


