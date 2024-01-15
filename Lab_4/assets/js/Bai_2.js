var app = angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.student = {
        fullName: "Dương Minh Bình",
        birthday: "01-01-1999",
        gender: "Nam",
        photo: "/assets/img/img.jpg",
        mark: 10
    }
});