// $(function(){
//     // 签到按钮
//     var sign = document.querySelector(".signin");
//     sign.onclick = function(){
//         var objs={};
//         objs['msg'] = 'sign';
//         $.ajax({
//             url:"",
//             type:"get",
//             dataType:"json",
//             data:JSON.stringify(objs),
//             success:SignSuccess(),
//             error:SignFailure()
//         });
//     };
    
//     // 分享按钮
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


//     function SignSuccess(){
//         var tan1 = document.getElementById('tan1');
//         var qiandao = document.querySelector(".signin");
//         var close1 = document.querySelector(".close");
//         // tan1.style.display = "none";
//         qiandao.onclick = function () {
//             tan1.style.display = "block";
//         }
//         close1.onclick = function () {
//             tan1.style.display = "none";
    
//         }
//     };
//     function SignFailure(){
//         var qiandao = document.querySelector(".signin");
//         qiandao.onclick = function () {
//             alert("签到失败！请重试！");
//         }
//     };
    
//     function ShareFailure(){ 
//         var share = document.querySelector(".share");   
//         share.onclick = function () {
//             alert("分享失败！请重试！");
//         }
       
//     };
    
// });


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

$(function(){
    SignSuccess();
    var share = document.querySelector(".share");
    share.onclick = function (){
        var close2 = document.querySelector(".close2")
        var tan2 = document.querySelector(".tan2");
        var share = document.querySelector(".share");    
        share.onclick = function () {
            tan2.style.display = "block";
        }
        close2.onclick = function () {
            tan2.style.display = "none";
        }
    };
});