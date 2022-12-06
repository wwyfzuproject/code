$(function(){
    // 登录
    $("#signinForm").on("submit",function(e){
        e.preventDefault();
        var formdata1=$("#signinForm").serialize();
        
        $.ajax({
            type:'post',
            url:'',
            dataType:'json',
            data:JSON.stringify(formdata1),
            contentType:"application/json",
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
            type:'post',
            url:'',
            dataType:"json",
            data:JSON.stringify(formdata2),
            contentType:"application/json",
            success:function(resp){
                console.log(resp);
            }
        });

    });
});
