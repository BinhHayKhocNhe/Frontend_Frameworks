var app = angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.fullName = "Dương Minh Bình";
    $scope.birthday = "01-01-1999";
    $scope.gender = "Nam";
    $scope.photo = "/assets/img/img.jpg";
    $scope.mark = 10;
});
