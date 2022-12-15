$(function(){
    // 无尽按钮
    $("#wj").click(function(){
        var objw={};
        objw['msg'] = 'wj';
        $.ajax({
            url:"",
            type:"post",
            dataType:"json",
            data:JSON.stringify(objw),
            success:function(resp){
                location.href = "gamegoing.html";
            },
            error:function(){
                alert("加载失败,请重试！");
            }
        });
    });

    //限时按钮
    $("#xs").click(function(){
        var objx={};
        objx['msg'] = 'xs';
        $.ajax({
            url:"",
            type:"post",
            dataType:"json",
            data:JSON.stringify(objx),
            success:function(resp){
                location.href = "gamegoing.html";
            },
            error:function(){
                alert("加载失败,请重试！");
            }
        });
    });

});