$(function(){
    // 登录
    $("#signinForm").on("submit",function(e){
        e.preventDefault();
        var formdata1=$("#signinForm").serialize();
        
        $.ajax({
            type:'get',
            url:'http://httpbin.org/get',
            data:{formdata1},
            success:function(resp){
                console.log(resp);
            }
        });

    });
    
    // 注册
    $("#signupForm").on("submit",function(e){
        e.preventDefault();
        var formdata2=$("#signupForm").serialize();
        
        $.ajax({
            type:'get',
            url:'http://httpbin.org/get',
            data:{formdata2},
            success:function(resp){
                console.log(resp);
            }
        });

    });
});
