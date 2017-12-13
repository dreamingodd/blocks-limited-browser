$(function(){
    let cellphone = GetQueryString('cellphone');
    $('#changePage1').attr('href', frontPath);
    $('#changePage2').attr('href', cellphone?'merchandise.html?cellphone=' + cellphone:'merchandise.html');
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }
});