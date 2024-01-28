var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
    $scope.products = [];
    $http.get("/assets/js/data.json").then(function (reponse) {
        $scope.products = reponse.data;
    });
}
);