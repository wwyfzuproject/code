$(function(){
    // 单人开始游戏按钮
    $("#single-game").onclick(function(){
        $.ajax({
            url:"",
            type:"get",
            dataType:"json",
            data:JSON.stringify(),
            success:function(resp){
                console.log(resp);
            },
            error:function(){
                alert("加载失败,请重试！");
            }
        });
    });

});