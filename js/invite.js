$(function(){
    $("#alert-btn").click(function(){
        alert('您已获得邀请码，请点击下方查看已有邀请码');
    })

    $("#submit-btn").click(function(){
        var data = {};
        data.name = $('#input-name').val();
        data.cellphone = $('#input-cellphone').val();
        data.address = $('#input-address').val();
        data.etherAddress = $('#input-ether-address').val();
        if (data.name == '' || data.cellphone == '' || data.address == '') {
            alert('姓名、手机号码、收货地址和以太坊地址不能为空！')
            return
        }
        if (!is_cellphone_number(data.cellphone)) {
            alert('请输入正确的手机号！')
            return
        }
        $.post(
            backPath + "/invite/inviteUser",
            data,
            function(result) {
                var res = JSON.parse(result);
                if (res.status != 200) {
                    alert("对不起，出错了，请稍后再试！");
                } else if (res.data == 0) {
                    alert('您已获得邀请码，请点击下方查看已有邀请码!');
                } else {
                    window.location.href = "invite-code.html?cellphone=" + data.cellphone;
                }
            }
        );
    })
})


function is_cellphone_number(str) {
    var pattern = /^\d{11}$/;
    return pattern.test(str);
}
