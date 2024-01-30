var app = angular.module("myApp", []).controller("myController", function ($scope) {
    $scope.products = [{
        name: "Đồng hồ Thụy Sĩ",
        price: 1200,
        img: "/assets/img/dongho.jpg"
    },
    {
        name: "Máy tính",
        price: 2000,
        img: "/assets/img/maytinh.jpg"
    },
    {
        name: "Máy ảnh",
        price: 500,
        img: "/assets/img/mayanh.jpg"
    },
    {
        name: "Nhẫn",
        price: 250,
        img: "/assets/img/nhan.jpg"
    },
    {
        name: "Nón",
        price: 120,
        img: "/assets/img/non.jpg"
    },
    {
        name: "Điện thoại",
        price: 780,
        img: "/assets/img/iphone.jpg"
    }
    ];
});
