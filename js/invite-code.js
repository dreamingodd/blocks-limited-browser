$(function() {
    var searchURL = window.location.search;
    searchURL = searchURL.substring(1, searchURL.length);
    var cellphone = searchURL.split("&")[0].split("=")[1];

    // Get user information.
    $.get(
        backPath + '/invite/inviteUser/' + cellphone,
        function(result) {
            var res = JSON.parse(result);
            if (res.status != 200) {
                alert("对不起，出错了，请稍后再试！");
            } else {
                $('#invite-code').text(res.data.inviteCode);
                $('#invite-count').text(res.data.inviteCount);
            }
        }
    );
});