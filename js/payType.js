$(function () {
    var payType = 'z';
    $("#total-price").html(GetQueryString('total'));
    $('#select-pay').on('click', function (e) {
        var target = e.target;
        if (target.nodeName === 'SPAN') {
            target = $(target).parent()[0];
        }
        if (!$(target).hasClass('active')) {
            $(target).addClass('active').siblings().removeClass('active');
        }
        payType = $("#select-pay .active").data('type');
        if (payType === 'z') {
            $('#zfb-con').removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide');
            $('#bank-card').val('');
            $('#bank-user').val('');
        } else {
            $('#bank-con').removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide');
            $('#zfb-account').val('');
            $('#zfb-user').val('');
        }
    });
    function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  decodeURI(r[2]); return null;
    }
    $('#submit-btn').on('click',function(){
        if(payType === 'z') {
            var _zfbAccount = $('#zfb-account').val();
            var _zfbUser = encodeURI($('#zfb-user').val());

            if (!_zfbAccount) {
                alert('请输入支付宝账号');
                return;
            } else if(!_zfbUser) {
                alert('请输入账号持有人');
                return;
            }
            window.location.href = "zfb.html?cellphone=" + GetQueryString('cellphone') + "&total=" + GetQueryString('total')+ '&account=' + _zfbAccount + '&name=' + _zfbUser + '&id=' + GetQueryString('id');
        } else {
            var _bankAccount = $('#bank-card').val();
            var _bankUser = encodeURI($('#bank-user').val());
            if (!_bankAccount) {
                alert('请输入银行卡');
                return;
            } else if(!_bankUser) {
                alert('请输入开户人');
                return;
            }
            window.location.href = "bank.html?cellphone=" + GetQueryString('cellphone') + "&total=" + GetQueryString('total') + '&account=' + _bankAccount + '&name=' + _bankUser+ '&id=' + GetQueryString('id');
        }
    })
});