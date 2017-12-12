$(function(){
    var searchURL = window.location.search;
    searchURL = searchURL.substring(1, searchURL.length);
    var searchText = searchURL.split("&")[0].split("=")[1];
    if (!searchText) searchText = ''
    else $('#input-search-text').val(searchText)

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

    $('body').on('click', '#search-btn', function(){
        window.location.href = frontPath + "/invite/order-list.html?searchText=" + $('#input-search-text').val();
    })

    $('body').on('click', '.btn-confirmation', function(){
        var id = $(this).parent().siblings('.order-id').html();
        $.ajax({
            type:'put',
            url: backPath + "/invite/order/confirmation?id=" + id,
            success: function(result){
                var res = JSON.parse(result);
                if (res.status != 200) {
                    alert("对不起，出错了，请稍后再试！");
                } else if(res.data){
                    window.location.href = frontPath + "/invite/order-list.html?searchText=" + $('#input-search-text').val();
                }
            }
        })
    })

    $('body').on('click', '.btn-failure', function(){
    })

    $('body').on('click', '.btn-delivery', function(){
        var id = $(this).parent().siblings('.order-id').html();
        $.ajax({
            type:'put',
            url: backPath + "/invite/order/delivery?id=" + id,
            success: function(result){
                var res = JSON.parse(result);
                if (res.status != 200) {
                    alert("对不起，出错了，请稍后再试！");
                } else if(res.data){
                    window.location.href = frontPath + "/invite/order-list.html?searchText=" + $('#input-search-text').val();
                }
            }
        })
    })

    $('body').on('click', '.btn-finish', function(){
        var id = $(this).parent().siblings('.order-id').html();
        $.ajax({
            type:'put',
            url: backPath + "/invite/order/finish?id=" + id,
            success: function(result){
                var res = JSON.parse(result);
                if (res.status != 200) {
                    alert("对不起，出错了，请稍后再试！");
                } else if(res.data){
                    window.location.href = frontPath + "/invite/order-list.html?searchText=" + $('#input-search-text').val();
                }
            }
        })
    })
})

function convertOrderToTr(order) {
    var trStr = "";

    trStr += "<tr>"
    trStr += "<td class='order-id'>" + order.id + "</td>"
    trStr += "<td>" + order.name + "</td>"
    trStr += "<td>" + order.cellphone + "</td>"
    trStr += "<td>" + order.address + "</td>"
    trStr += "<td>" + order.inviteCode + "</td>"
    trStr += "<td>" + order.createdAtStr + "</td>"
    trStr += "<td>" + order.comment + "</td>"
    payChannelText = ''
    if (order.payChannel == 1) payChannelText = '支付宝'
    if (order.payChannel == 2) payChannelText = '银行转账'
    trStr += "<td>" + payChannelText + "</td>"
    trStr += "<td>" + order.payAccount + "</td>"
    trStr += "<td>" + order.payerName + "</td>"
    trStr += "<td>" + order.quantity + "</td>"
    trStr += "<td>" + (order.sum/100) + "</td>"
    statusText = ''
    if (order.status == 0 || order.status == 1) statusText = '待审核'
    if (order.status == 2) statusText = '审核通过'
    if (order.status == 3) statusText = '审核未通过'
    if (order.status == 4) statusText = '送货中'
    if (order.status == 5) statusText = '订单完成'
    trStr += "<td>" + statusText + "</td>"
    trStr += "<td>" + htmlOfButtons() + "</td>"
    trStr += "</tr>"

    return trStr;
}

function htmlOfButtons() {
    return '<button class="btn btn-primary btn-confirmation">确认收款</button>&nbsp;'
        + '<button class="btn btn-danger btn-failure">确认失败</button>&nbsp;'
//        + '<button class="btn btn-warning btn-delivery">发货</button>&nbsp;'
//        + '<button class="btn btn-default btn-finish">完成</button>&nbsp;'
    ;
}