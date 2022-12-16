$(function(){
    // 金币数显示
    $("#coinNum").on(function(){
        var coinNum = $("#coinNum");
        var temp1 = "";
        coinNum.empty();
        var resp1 = getCookie('money');
        temp1 += '<p class="coinNum">'+resp1+'</p>';
        coinNum.append(temp1)
    });
    // 用户名显示
    $("#name").on(function(){
        var name = $("#name");
        var gammingname = $("#gamingname");
        var temp2 = "";
        var temp3 = "";
        var resp2 = getCookie('username');
        name.empty();
        temp2 += '<div class="name">'+resp2+'</div>'
        name.append(temp2)
        gammingname.empty();
        temp3 += '<p>'+resp2+'</p>'
        gammingname.append(temp3);
    });
});