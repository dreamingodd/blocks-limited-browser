$(function() {
    var searchURL = window.location.search
    searchURL = searchURL.substring(1, searchURL.length)
    var type = searchURL.split("&")[0].split("=")[0]
    var cellphone, inviteCode
    if (type == 'cellphone') {
        cellphone = searchURL.split("&")[0].split("=")[1]
        $('#order-link').attr('href', 'order.html?cellphone=' + cellphone)
        // Get user information.
        $.get(
            backPath + '/invite/inviteUser/' + cellphone,
            function(result) {
                var res = JSON.parse(result)
                if (res.status != 200) {
                    alert("对不起，出错了，请稍后再试！")
                } else {
                    $('#input-name').val(res.data.name)
                    $('#input-cellphone').val(res.data.cellphone)
                    $('#input-address').val(res.data.address)
                }
            }
        );
    } else if (type == 'inviteCode') {
        inviteCode = searchURL.split("&")[0].split("=")[1]
        $('#input-name').text(inviteCode)
    }


    $("#submit-btn").click(function(){
        var data = {};
        data.name = $('#input-name').val();
        data.cellphone = $('#input-cellphone').val();
        data.address = $('#input-address').val();
        data.quantity = $('#input-quantity').val();
        if (data.name == '' || data.cellphone == '' || data.address == '') {
            alert('姓名、手机号码、收货地址不能为空！')
            return
        }
        if (!is_cellphone_number(data.cellphone)) {
            alert('请输入正确的手机号！')
            return
        }
        $.post(
            backPath + "/invite/order",
            data,
            function(result) {
                var res = JSON.parse(result);
                if (res.status != 200) {
                    alert("对不起，出错了，请稍后再试！");
                    alert("跳转付款页面！");
                } else if (res.data == 0) {
                    alert('您已获得邀请码，请点击下方查看已有邀请码!');
                } else {
                    window.location.href = "pay.html?cellphone=" + data.cellphone;
                }
            }
        );
    })
});