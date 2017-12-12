

function is_cellphone_number(str) {
    var pattern = /^\d{11}$/;
    return pattern.test(str);
}