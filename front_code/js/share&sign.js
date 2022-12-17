$(function(){
    // 签到按钮
    var tan1 = document.getElementById('tan1');
    var qiandao = document.querySelector(".signin");
    var close1 = document.querySelector(".close");
    qiandao.onclick = function () {
        var d = {};
        var email = getCookie('email');
        var str = email.substring(1,email.length-1)
        d['email'] = str;
        $.ajax({
           
            url:"",
            type:"get",
            dataType:"json",
            data:JSON.stringify(email),
            success:function(){
                tan1.style.display = "block";
                // var money = getCookie('money');  
                var money = '123';   
                var coinNum = $("#coinNum");
                coinNum.html(money);
            },
            error:SignFailure()
        })
        
    }
    close1.onclick = function () {
    tan1.style.display = "none";
    
    }
        
    
    // 分享按钮
    var close2 = document.querySelector(".close2")
    var tan2 = document.querySelector(".tan2");
    var share = document.querySelector(".share");    
    share.onclick = function () {
        tan2.style.display = "block";
    }
    close2.onclick = function () {
        tan2.style.display = "none";
    }
    
    //获取cookie
    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return "";
        }
});
    function SignSuccess(){
        var tan1 = document.getElementById('tan1');
        var qiandao = document.querySelector(".signin");
        var close1 = document.querySelector(".close");
        // tan1.style.display = "none";
        qiandao.onclick = function () {
            tan1.style.display = "block";
        }
        close1.onclick = function () {
            tan1.style.display = "none";
    
        }
    };
    
    function SignFailure(){
        var qiandao = document.querySelector(".signin");
        qiandao.onclick = function () {
            alert("签到失败！请重试！");
        }
    };
    
    function ShareFailure(){ 
        var share = document.querySelector(".share");   
        share.onclick = function () {
            alert("分享失败！请重试！");
        }
       
    };


    



// function SignSuccess(){
//     var tan1 = document.getElementById('tan1');
//     var qiandao = document.querySelector(".signin");
//     var close1 = document.querySelector(".close");
//     // tan1.style.display = "none";
//     qiandao.onclick = function () {
//         tan1.style.display = "block";
//     }
//     close1.onclick = function () {
//         tan1.style.display = "none";

//     }
// };

// $(function(){
//     SignSuccess();
//     var share = document.querySelector(".share");
//     share.onclick = function (){
//         var close2 = document.querySelector(".close2")
//         var tan2 = document.querySelector(".tan2");
//         var share = document.querySelector(".share");    
//         share.onclick = function () {
//             tan2.style.display = "block";
//         }
//         close2.onclick = function () {
//             tan2.style.display = "none";
//         }
//     };
// });