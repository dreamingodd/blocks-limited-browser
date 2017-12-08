$(function() {

    $('#view-btn').click(function(){
        var cellphone = $('#input-cellphone').val();
        // Get user information.
        $.get(
            backPath + '/invite/inviteUser/' + cellphone,
            function(result) {
                var res = JSON.parse(result);
                if (res.status != 200) {
                    alert("对不起，出错了，请稍后再试！");
                } else if (res.data == null) {
                    alert('没有此手机号码的邀请码！');
                } else {
                    window.location.href = "invite-code.html?cellphone=" + cellphone;
                }
            }
        );
    });
});