$(function(){
    // 签到按钮
    $("#sign").onclick(function(){
        var objs={name:"",msg:"sign"};

        $.ajax({
            url:"",
            type:"get",
            dataType:"json",
            data:objs,
            success:function(){
                SignSuccess();
            },
            error:function(){
                SignFailure();
            }
        });
    });
    // 分享按钮
    $("#share").onclick(function(){
        var objr={name:"",msg:"share"};

        $.ajax({
            url:"",
            type:"get",
            success:function(resp){
                ShareSuccess();
            },
            error:function(){
                ShareFailure();
            }
        });
    });

});

function SignSuccess(){

};
function SignFailure(){

};
function ShareSuccess(){

};
function ShareFailure(){

};