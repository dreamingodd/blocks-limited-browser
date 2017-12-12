$(function() {
    var searchURL = window.location.search;
    searchURL = searchURL.substring(1, searchURL.length);
    var cellphone = searchURL.split("&")[0].split("=")[1];
    var inviteCode = '';

    // purchase link
    $('#purchase-link').attr('href', 'merchandise.html?cellphone=' + cellphone);

    // Get user information.
    $.get(
        backPath + '/invite/inviteUser/' + cellphone,
        function(result) {
            var res = JSON.parse(result);
            if (res.status != 200) {
                alert("对不起，出错了，请稍后再试！");
            } else {
                inviteCode = res.data.inviteCode
                $('#name').text(res.data.name);
                $('#invite-code').text(inviteCode);
                $('#invite-count').text(res.data.inviteCount);
            }
        }
    );

    // copy invite code
    var clipboard = new Clipboard('.copy-btn', {
        text: function() {
            return merchandisePath + '?inviteCode=' + inviteCode;
        }
    });

    clipboard.on('success', function(e) {
        alert("复制成功！");
    });

    clipboard.on('error', function(e) {
        alert("复制失败！");
    });
});