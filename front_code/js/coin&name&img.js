$(function(){
    // 金币数显示
    $("#coinNumber").on(function(){
        var objc={};
        $.ajax({
            url:"",
            type:"post",
            dataType:"json",
            data:objc,
            success:function(resp){

            },
            error:function(){

            }
        });
    });
    // 用户名显示
    $("#username").on(function(){
        var obju={};
        $.ajax({
            url:"",
            type:"post",
            dataType:"json",
            data:obju,
            success:function(resp){

            },
            error:function(){

            }
        });
    });
    // 用户头像
    // $("#img").on(function(){
    //     var obj_img={};
    //     $.ajax({
    //         url:"",
    //         type:"post",
    //         dataType:"json",
    //         data:obj_img,
    //         success:function(resp){

    //         },
    //         error:function(){

    //         }
    //     });
    // });

});