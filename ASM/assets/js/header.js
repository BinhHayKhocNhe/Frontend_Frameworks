document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 100) { // Thay đổi giá trị 100 nếu bạn muốn header trở thành fixed ở vị trí cuộn khác
            header.classList.add("fixed-header");
            header.classList.add("fixed-header a");
            header.classList.add("fixed-header ul");
            header.classList.add("fixed-header i");
        } else {
            header.classList.remove("fixed-header");
        }
    });
});