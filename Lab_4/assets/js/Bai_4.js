var app = angular.module("myApp", []).controller("calc", function ($scope) {
    $scope.calculate = function () {
        var a = parseFloat($scope.lenght);
        var b = parseFloat($scope.width);
        if (a <= 0 || b <= 0) {
            alert("Vui lòng nhập giá trị lớn hơn 0 cho cả chiều dài và chiều rộng.");
            return;
        }
        $scope.dienTich = a * b;
        $scope.chuVi = (a + b) * 2;
    }
});