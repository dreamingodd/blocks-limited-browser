$(function(){
    let cellphone = GetQueryString('cellphone');
    let inviteCode = GetQueryString('inviteCode');
    $('#changePage1').attr('href', frontPath);
    if(cellphone){
        $('#changePage2').attr('href', 'merchandise.html?cellphone=' + cellphone);
    } else if(inviteCode){
        $('#changePage2').attr('href', 'merchandise.html?inviteCode=' + inviteCode);
    } else {
        $('#changePage2').attr('href', 'merchandise.html');
    }


    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }
});