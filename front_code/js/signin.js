$(function(){
    // 登录
    $("#signinForm").on("submit",function(e){
        e.preventDefault();
        var email_in=$("#email_signin").val();
        var pwd_in=$("#upwd_signin").val();
        
        $.ajax({
            type:'post',
            url:'',
            dataType:'json',
            data:{"email_in":email_in,"pwd_in":pwd_in},
            contentType:"application/json",
            success:function(resp){
                console.log(resp);
            }
        });

    });
    
    // 注册
    $("#signupForm").on("submit",function(e){
        e.preventDefault();
        var uname=$("#uname").val();
        var email_up=$("#email_signup").val();
        var pwd_up=$("#upwd_signup").val();
        var cpwd=$("#cpwd").val();
        
        $.ajax({
            type:'get',
            url:'http://httpbin.org/get',
            dataType:"json",
            data:{"email_up":email_up,"username":uname,"pwd_up":pwd_up,"cpwd":cpwd},
            contentType:"application/json",
            success:function(resp){
                console.log(resp);
            }
        });

    });
});
