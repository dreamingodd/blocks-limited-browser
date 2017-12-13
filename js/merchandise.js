$(function(){
    var searchURL = window.location.search
    searchURL = searchURL.substring(1, searchURL.length)
    var type = searchURL.split("&")[0].split("=")[0]
    var cellphone, inviteCode
    if (type == 'cellphone') {
        cellphone = searchURL.split("&")[0].split("=")[1]
        $('#order-link').attr('href', 'order.html?cellphone=' + cellphone);
    } else if (type == 'inviteCode') {
        inviteCode = searchURL.split("&")[0].split("=")[1]
        $('#order-link').attr('href', 'order.html?inviteCode=' + inviteCode);
    } else {
        $('#order-link').attr('href', 'order.html?empty=');
    }
});