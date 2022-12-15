$(function(){
    $("#").click(function(){
        var objl = {};
        objl['msg'] = "link";
        $.ajax({
            url:"",
            type:"post",
            dataType:"json",
            data:JSON.stringify(objl),
            success:function(resp){

            },
            error:function(){
                
            }
        });
    });
});