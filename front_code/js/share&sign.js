$(function(){
    // 签到按钮
    $("#sign").onclick(function(){
        var objs={};
        objs['msg'] = 'sign';

        $.ajax({
            url:"",
            type:"get",
            dataType:"json",
            data:JSON.stringify(objs),
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
        var objr={};
        objr['msg'] = 'share';

        $.ajax({
            url:"",
            type:"get",
            dataType:"json",
            data:JSON.stringify(objr),
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