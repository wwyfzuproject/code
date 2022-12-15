$(function(){
    // 金币数显示
    $("#coinNum").on(function(){
        var coinNum = $("#coinNum");
        var temp = "";
        $.ajax({
            url:"",
            type:"get",
            success:function(resp){
                coinNum.empty();
                temp += '<p class="coinNum">'+resp+'</p>'
            },
        });
    });
    // 用户名显示
    $("#name").on(function(){
        var name = $("#name");
        var temp = "";
        name.empty();
        resp = getCookie('username');
        temp += '<div class="name">'+resp+'</div>'
        name.append(temp)
    });
});