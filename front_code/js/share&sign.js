$(function(){
    // 签到按钮
    $("#sign").onclick(function(){
        $.ajax({
            url:"",
            type:"get",
            dataType:"json",
            data:JSON.stringify(),
            success:function(resp){
                console.log(resp);
            },
            error:function(){
                alert("签到失败，请重试！");
            }
        });
    });
    // 分享按钮
    $("#share").onclick(function(){
        $.ajax({
            url:"",
            type:"get",
            dataType:"json",
            data:JSON.stringify(),
            success:function(resp){
                console.log(resp);
            },
            error:function(){
                alert("分享失败,请重试！");
            }
        });
    });

});