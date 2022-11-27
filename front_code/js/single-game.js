$(function(){
    // 单人开始游戏按钮
    $("#single-game").onclick(function(){
        objg={};

        $.ajax({
            url:"",
            type:"get",
            dataType:"json",
            data:objg,
            success:function(resp){
                console.log(resp);
            },
            error:function(){
                alert("加载失败,请重试！");
            }
        });
    });

});