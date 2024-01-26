var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.student = {};
    $scope.students = [{
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
    $scope.index = -1;
    console.log("Dữ liệu students trong controller: ", $scope.students);
    $scope.new = function () {
        $scope.student = {};
        $scope.index = -1;
    }
    $scope.insert = function () {
        $scope.students.push(angular.copy($scope.student));
        $scope.new();
    }
    $scope.update = function () {
        $scope.students[$scope.index] = angular.copy($scope.student);
        $scope.new();
    }
    $scope.delete = function () {
        $scope.students.splice($scope.index, 1);
        $scope.new();
    }
    $scope.cancel = function () {
        if ($scope.index != -1) {
            $scope.edit($scope.index);
            return;
        }
        $scope.new();
    }
    $scope.edit = function (index) {
        $scope.index = index;
        $scope.student = angular.copy($scope.students[index])
    }
});
