function populateOptions(selectElement) {
    for (var i = 1; i <= 20; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        selectElement.add(option);
    }

    // Thêm tùy chọn "Trên 20"
    var optionOver20 = document.createElement('option');
    optionOver20.text = 'Trên 20';
    selectElement.add(optionOver20);
}

// Lấy thẻ select bằng id và gọi hàm để tạo tùy chọn
var adultsSelect = document.getElementById('adultsSelect');
var childrenSelect = document.getElementById('childrenSelect');
var treNho = document.getElementById('treNho');
populateOptions(adultsSelect);
populateOptions(childrenSelect);
populateOptions(treNho);