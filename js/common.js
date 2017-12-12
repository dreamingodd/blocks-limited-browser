
$.ajaxSetup ({cache:false});
function is_cellphone_number(str) {
    var pattern = /^\d{11}$/;
    return pattern.test(str);
}
$('.header-back').on('click',function(){
    window.history.go(-1);
});