$(function(){
    let cellphone = GetQueryString('cellphone');
    let inviteCode = GetQueryString('inviteCode');

    $('#aaa').on('click',function(){
        alert(1111)
    })
    $('#changePage1').on('tap',function(){
        window.location.href = frontPath + (inviteCode?'?inviteCode=' + inviteCode:'');
    })
    $('#changePage2').on('tap',function(){
        if(cellphone){
            window.location.href =  'merchandise.html?cellphone=' + cellphone;
        } else if(inviteCode){
            window.location.href =  'merchandise.html?inviteCode=' + inviteCode;
        } else {
            window.location.href =  'merchandise.html';
        }
    })

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }
});