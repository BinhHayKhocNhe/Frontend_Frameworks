var app = angular.module("myApp", []);
app.controller("myCtrl1", function ($scope) {
    $scope.save = function () {
        $scope.$parent.students[$scope.$parent.index] = $scope.student;
    }
    $scope.cancel = function () {
        $scope.$parent.students = angular.copy($scope.$parent.students[$scope.$parent.index]);
    }

});
app.controller("myCtrl2", function ($scope, $rootScope) {
    $rootScope.students = [{
        fullName: "Dương Minh Bình",
        birthday: "01-01-2000",
        mark: 10
    },
    {
        fullName: "Đỗ Mỹ Thuận",
        birthday: "15-01-2005",
        mark: 3
    },
    {
        fullName: "Nguyễn Văn A",
        birthday: "15-01-1999",
        mark: 7
    }];

    $scope.edit = function (index) {
        $rootScope.index = index;
        $rootScope.student = angular.copy($rootScope.students[index]);
    }
});

