var app = angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.student = {};
    $scope.save = function () {
        var a = parseFloat($scope.student.mark);
        if (a < 0) {
            $scope.student.grade = "Điểm không hợp lệ !";
            return;
        } else if (a < 5) {
            $scope.student.grade = "Rớt";
            return;
        }
        $scope.student.grade = "Đậu";
    }
});