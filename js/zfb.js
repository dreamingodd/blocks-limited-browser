$(function () {
    var payType = 'z';
    $('#zfbAccount').html(GetQueryString('account'));
    $('#zfbUser').html(GetQueryString('name'));
    $("#total-price").html(GetQueryString('total'));

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    $('#submit-btn').on('click', function () {
        var data = {
            id: '',
            payChannel: 1,
            payAccount: GetQueryString('account'),
            payerName: GetQueryString('name')
        };
        $.ajax({
            type:'put',
            dataType: 'json',
            url: backPath + '/invite/order/paid' + `?id=${data.id}&payChannel=${data.payChannel}&payAccount=${data.payAccount}&payerName=${data.payerName}`,
            success:function(res){
                console.log(res);
            }
        })
    });
    var clipboard = new Clipboard('#copy', {
        text: function() {
            return GetQueryString('account');
        }
    });

    clipboard.on('success', function(e) {
        alert("复制成功！");
    });

    clipboard.on('error', function(e) {
        alert("复制失败！");
    });
});