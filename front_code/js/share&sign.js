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
    var tan1 = document.getElementById('tan1');
    var qiandao = document.querySelector(".signin");
    var close1 = document.querySelector(".close");
    tan1.style.display = "none";
    tan2.style.display = "none";
    qiandao.onclick = function () {
        tan1.style.display = "block";
    }
    close1.onclick = function () {
        tan1.style.display = "none";

    }
};
function SignFailure(){
    alert("签到失败！请重试！");
};
function ShareSuccess(){
    var close2 = document.querySelector(".close2")
    var tan2 = document.querySelector(".tan2");
    var share = document.querySelector(".share");
    var copy = document.querySelector(".copy");
    var copysuccess = document.querySelector(".copysuccess");
    tan1.style.display = "none";
    tan2.style.display = "none";
    copysuccess.style.display = "none";

    share.onclick = function () {
        tan2.style.display = "block";
    }
    close2.onclick = function () {
        tan2.style.display = "none";
    }
    copy.onclick=function(){
        copysuccess.style.display = "block";
        setTimeout(function(){
            copysuccess.style.display="none";
        },2000)
    }
    

};
function ShareFailure(){
    alert("分享失败！请重试！");
};
