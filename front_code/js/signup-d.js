//为用户名绑定失去焦点事件
$("#uname").blur(function () {
    let uname = $("#uname").val();
    $.ajax({
        url:"",
        data:"username="+uname,
        type:"POST",
        dataType:"text",
        success:function (data) {
            ;
        },
        error:function () {
            alert("操作失败...");
        }
    });
});
//为密码绑定失去焦点事件
$("#upwd").blur(function () {
    let uname = $("#upwd").val();
    $.ajax({
        url:"",
        data:"password="+upwd,
        type:"POST",
        dataType:"text",
        success:function (data) {
            ;
        },
        error:function () {
            alert("操作失败...");
        }
    });
});
//为邮箱绑定失去焦点事件
$("#email").blur(function () {
    let uname = $("#email").val();
    $.ajax({
        url:"",
        data:"email="+email,
        type:"POST",
        dataType:"text",
        success:function (data) {
            ;
        },
        error:function () {
            alert("操作失败...");
        }
    });
});
