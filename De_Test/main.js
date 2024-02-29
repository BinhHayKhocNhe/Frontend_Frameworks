var app = angular.module("myApp", []);
app.controller("SanPham", function ($scope, $http, $rootScope) {
    $scope.products = [];
    $http.get("data.json").then(function (response) {
        $scope.products = response.data;
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id == $routeParams.id) {
                $scope.index = i;
            }
        }
    });

    $rootScope.search = function (input) {
        $rootScope.keySearch = input;
    };

    $scope.sort = 'price'; // Giá trị mặc định
    $scope.onChangeSort = function () {
        switch ($scope.selectedSort) {
            case '3':
                $scope.sort = 'title';
                console.log("Tăng dần theo A-Z");
                break;
            case '4':
                $scope.sort = '-title';
                console.log("Giảm dần theo Z-A");
                break;
            case '1':
                $scope.sort = 'price';
                console.log("Từ thấp đến cao");
                break;
            case '2':
                $scope.sort = '-price';
                console.log("Từ cao đến thấp");
                break;
            default:
                $scope.sort = 'price';
                break;
        }
    };

    $scope.brands = {
        nobrand: "No Brand",
        Cardina: "Cardina",
        hungviet: "Hưng Việt",
        pmax: "Pmax",
        huonggiang: "Hương Giang"
    };

    $scope.sortByBrand = ''; // Khởi tạo giá trị mặc định
    $scope.onChangeBrands = function () {
        switch ($scope.selectedBrands) {
            case 'No Brand':
                $scope.sortByBrand = 'nobrand';
                break;
            case 'Cardina':
                $scope.sortByBrand = 'Cardina';
                break;
            case 'Hưng Việt':
                $scope.sortByBrand = 'hungviet';
                break;
            case 'Pmax':
                $scope.sortByBrand = 'pmax';
                break;
            case 'Hương Giang':
                $scope.sortByBrand = 'huonggiang';
                break;
            default:
                $scope.sortByBrand = 'nobrand';
                break;
        }
    };

});
