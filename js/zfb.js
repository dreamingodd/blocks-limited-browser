$(function () {
    $("#total-price").html(GetQueryString('total'));

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }

    $('#submit-btn').on('click', function () {
        var data = {
            id: GetQueryString('id'),
            payChannel: 1,
            payAccount: GetQueryString('account'),
            payerName: GetQueryString('name')
        };
        $.ajax({
            type:'put',
            dataType: 'json',
            url: backPath + '/invite/order/paid' + `?id=${data.id}&payChannel=${data.payChannel}&payAccount=${data.payAccount}&payerName=${data.payerName}`,
            success:function(res){
                if (res.data === 1) {
                    window.location.href = "orderInfo.html?cellphone=" + GetQueryString('cellphone');
                }
            }
        })
    });
    var clipboard = new Clipboard('#copy', {
        text: function() {
            return '15685122678';
        }
    });

    clipboard.on('success', function(e) {
        alert("复制成功！");
    });

    clipboard.on('error', function(e) {
        alert("复制失败！");
    });
});