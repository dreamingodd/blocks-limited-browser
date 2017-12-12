$(function(){
    var searchURL = window.location.search;
    searchURL = searchURL.substring(1, searchURL.length);
    var searchText = searchURL.split("&")[0].split("=")[1];
    if (!searchText) searchText = ''

    $.ajax({
        type:'get',
        url: backPath + "/invite/order?searchText=" + searchText,
        success: function(result){
            var res = JSON.parse(result);
            if (res.status != 200) {
                alert("对不起，出错了，请稍后再试！");
            } else if(res.data){
                var orders = res.data
                for (i = 0; i < orders.length; i++) {
                    var order = orders[i];
                    $('#data-table').append(convertOrderToTr(order));
                }
            }
        }
    })
})

function convertOrderToTr(order) {
    var trStr = "";

    trStr += "<tr>"
    trStr += "<td>" + order.id + "</td>"
    trStr += "<td>" + order.name + "</td>"
    trStr += "<td>" + order.cellphone + "</td>"
    trStr += "<td>" + order.address + "</td>"
    trStr += "<td>" + order.quantity + "</td>"
    trStr += "<td>" + order.inviteCode + "</td>"
    trStr += "<td>" + order.createdAt + "</td>"
    trStr += "<td>" + order.comment + "</td>"
    trStr += "<td>" + order.payChannel + "</td>"
    trStr += "<td>" + order.payAccount + "</td>"
    trStr += "<td>" + order.payerName + "</td>"
    trStr += "<td>" + (order.sum/100) + "</td>"
    trStr += "<td>" + htmlOfButtons() + "</td>"
    trStr += "</tr>"

    return trStr;
}

function htmlOfButtons() {
    return '<button class="btn btn-primary">确认收款</button>&nbsp;'
        + '<button class="btn btn-danger">确认失败</button>&nbsp;'
        + '<button class="btn btn-warning">发货</button>&nbsp;'
        + '<button class="btn">完成</button>&nbsp;'
    ;
}