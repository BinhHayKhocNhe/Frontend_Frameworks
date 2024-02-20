
var app = angular.module("myApp", []);

app.run(function ($rootScope) {
    // Kiểm tra xem dữ liệu đã được lưu trong localStorage chưa
    var storedAccounts = localStorage.getItem("accounts");

    // Nếu đã có dữ liệu, sử dụng nó. Nếu không, sử dụng dữ liệu mặc định
    $rootScope.accounts = storedAccounts ? JSON.parse(storedAccounts) : [
        {
            "fullName": "Dương Minh Bình",
            "email": "binhdmps32770@fpt.edu.vn",
            "pass": "binhdeptrai",
            "phone": "0385193525"
        },
        {
            "fullName": "Đỗ Mỹ Thuận",
            "email": "thuan@fpt.edu.vn",
            "pass": "thuanbim",
            "phone": "0121546987"
        }
    ];
});

app.controller("LoginController", function ($scope, $rootScope) {
    $scope.username = "";
    $scope.password = "";
    $scope.login = function () {
        if (!$scope.username || !$scope.password) {
            $scope.showAlert = "Vui lòng nhập đầy đủ tên tài khoản và mật khẩu.";
            return;
        }
        var user = $rootScope.accounts.find(function (account) {
            return account.email === $scope.username && account.pass === $scope.password;
        });

        if (user) {
            window.location.href = 'index.html';
        } else {
            $scope.showAlert = "Email hoặc mật khẩu không chính xác";
        }
    };
});

app.controller("RegisterController", function ($scope, $rootScope) {
    $scope.modalMessage = ""; // Biến để chứa thông báo

    // Hàm để ẩn modal
    $scope.hideModal = function () {
        $scope.showModal = false;
    };

    $scope.register = function () {
        if (!$scope.newFullName || !$scope.newEmail || !$scope.newPassword || !$scope.newPhone || !$scope.confirmPassword) {
            $scope.modalMessage = "Vui lòng nhập đầy đủ thông tin.";
            return;
        }

        if ($scope.newPassword.length < 8) {
            $scope.modalMessage = "Mật khẩu phải có ít nhất 8 kí tự.";
            return;
        }
        //    Kiểm tra xem mật khẩu có chứa kí tự đặc biệt hay không
        var specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
        if (!specialCharacterRegex.test($scope.newPassword)) {
            $scope.modalMessage = "Mật khẩu phải chứa ít nhất một kí tự đặc biệt.";
            return;
        }
        if ($scope.newPassword !== $scope.confirmPassword) {
            $scope.modalMessage = "Mật khẩu và mật khẩu nhập lại không trùng khớp.";
            return;
        }
        var existingUser = $rootScope.accounts.find(function (account) {
            return account.email === $scope.newEmail;
        });

        if (existingUser) {
            $scope.modalMessage = "Email đã tồn tại. Vui lòng sử dụng email khác.";
        } else {
            $rootScope.accounts.push({
                "fullName": $scope.newFullName,
                "email": $scope.newEmail,
                "pass": $scope.newPassword,
                "phone": $scope.newPhone
            });

            // Lưu trữ dữ liệu vào localStorage
            localStorage.setItem("accounts", JSON.stringify($rootScope.accounts));
            window.location.href = 'Login.html'
        }
    };
});

app.controller("ChangePasswordController", function ($scope, $rootScope) {
    $scope.currentPassword = "";
    $scope.newPassword = "";
    $scope.confirmNewPassword = "";

    $scope.changePassword = function () {
        var currentUser = $rootScope.currentUser;

        if (!$rootScope.currentUser) {
            // Nếu không có người dùng nào đang đăng nhập, chuyển hướng đến trang đăng nhập
            alert("Vui lòng đăng nhập trước khi đổi mật khẩu.");
            window.location.href = 'Login.html'; // hoặc trang đăng nhập của bạn
            return;
        }

        if ($scope.currentPassword !== currentUser.pass) {
            alert("Mật khẩu hiện tại không chính xác.");
            return;
        }

        if ($scope.newPassword !== $scope.confirmNewPassword) {
            alert("Mật khẩu mới và xác nhận mật khẩu mới không trùng khớp.");
            return;
        }

        // Cập nhật mật khẩu mới cho người dùng
        currentUser.pass = $scope.newPassword;

        // Lưu trữ dữ liệu vào Local Storage
        localStorage.setItem("accounts", JSON.stringify($rootScope.accounts));

        alert("Đổi mật khẩu thành công.");

        // Chuyển hướng đến trang chính hoặc trang đăng nhập
        // window.location.href = 'index.html'; // hoặc 'Login.html' tùy vào luồng của ứng dụng
    };
});
