$(function(){
    // 签到按钮
    $("#sign").onclick(function(){
        var objs={name:"",msg:"sign"};

        $.ajax({
            url:"",
            type:"get",
            dataType:"json",
            data:objs,
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
        var objr={name:"",msg:"share"};

        $.ajax({
            url:"",
            type:"get",
            dataType:"json",
            data:objr,
            success:function(resp){
                console.log(resp);
            },
            error:function(){
                alert("分享失败,请重试！");
            }
        });
    });

});