var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
    $scope.account = [];
    $http.get("/assets/js/account.json").then(function (reponse) {
        $scope.account = reponse.data;
    });
    $scope.login = function () {
        var username = $scope.username;
        var password = $scope.password;
        var loggedIn = $scope.account.some(function (user) {
            return user.email === username && user.pass === password;
        });

        if (loggedIn) {
            alert('Đăng nhập thành công!');
            window.location.href = 'index.html';
        } else {
            alert('Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu.');
        }
    }
    $scope.register = function () {
        var fullName = $scope.fullName;
        var email = $scope.email;
        var passWord = $scope.passWord;
        var phone = $scope.phone;
        var enterPassword = $scope.enterPassword;
        // Kiểm tra xem email đã được đăng ký trước đó chưa
        var isEmailExist = $scope.account.some(function (user) {
            return user.email === email;
        });

        if (isEmailExist) {
            alert('Email đã được đăng ký trước đó. Vui lòng chọn email khác.');
            return;
        }
        if (passWord !== enterPassword) {
            alert('Mật khẩu nhập lại không trùng khớp. Vui lòng kiểm tra lại.');
            return;
        }
        // Thêm người dùng mới vào danh sách
        var newUser = {
            fullName: fullName,
            email: email,
            pass: passWord,
            phone: phone
        };

        $scope.account.push(newUser);

        alert('Đăng ký thành công!');
        // Thực hiện chuyển hướng sau khi đăng ký thành công
        window.location.href = 'Login.html';
    };
}
);
