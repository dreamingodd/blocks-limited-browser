$(function(){
    $("#alert-btn").click(function(){
        alert('您已获得邀请码，请点击下方查看已有邀请码');
    })

    $("#submit-btn").click(function(){
        var data = {};
        data.name = $('#input-name').val();
        data.cellphone = $('#input-cellphone').val();
        data.address = $('#input-address').val();
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
