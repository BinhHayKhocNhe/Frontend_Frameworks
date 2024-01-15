var app = angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.students = [
        {
            fullname: "Nguyễn Văn A",
            birthday: "01-01-1999",
            gender: "Nam",
            mark: 9,
            photo: "/assets/img/img.jpg"
        },
        {
            fullname: "Trần Thị B",
            birthday: "01-01-2008",
            gender: "Nữ",
            mark: 8.5,
            photo: "/assets/img/anh-sieu-nhan-gao_5.jpg"
        },
        {
            fullname: "Đỗ Mỹ Thuận",
            birthday: "01-01-2004",
            gender: "Nam",
            mark: 10,
            photo: "/assets/img/Avatar-Sieu-Nhan-bua.jpg"
        }
    ];
});