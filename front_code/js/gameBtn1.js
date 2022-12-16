$(function(){
    var start = document.querySelector(".accept-deduct-gold");
    start.onclick = function(){
        var objm = {};
        objm['msg'] = 'money';
        $.ajax({
            url:"",
            type:"get",
            dataType:"json",
            data:JSON.stringify(objm),
            success:function(){
                location.href = "../HTML/single-invitesuccess.html";
            },
            error:function(){
                alert("加载失败！请重试！");
            }
        });
    };
});