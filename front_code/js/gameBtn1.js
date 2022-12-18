$(function(){
    var start = document.querySelector(".accept-deduct-gold");
    start.onclick = function(){
        var d = {};
        var email = getCookie('email');
        var str = email.substring(1,email.length-1);
        d['email'] = str;

        $.ajax({
            url:"",
            type:"get",
            dataType:"json",
            data:JSON.stringify(d),
            success:function(){
                location.href = "../HTML/single-invitesuccess.html";
            },
            error:function(){
                alert("加载失败！请重试！");
            }
        });
    };

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