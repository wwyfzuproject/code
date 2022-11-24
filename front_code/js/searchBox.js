$(function(){

    $("#content").keyup(function(){
        var tips=$("#tips");
        $.ajax({
            url:"",
            type:"get",
            dataType:"text",
            data:{"name":this.value},
            success:function(resp){//回调函数
                if(resp==""){
                    return;
                }
                var cons=resp.split(",");//数据提取分隔符
                var divs="";
                for(var i=0;i<cons.length;i++){
                    divs+="<div onclick='writeContent(this)'  onmouseover='changeBgcolor(this)' onmouseout='turnBgcolor(this)'>"+cons[i]+"</div>";
                }
                tips.html(divs);
                tips.css("display","block")
            },
            // error:function(){
            //     alert("请求失败！")
            // }
        })
    });

    $("#submit").onclick(function(){
        $.ajax({
            url:"",
            type:"post",
            dataType:"text",
            data:$("#content").val(),
            success:function(){
                console.log("传输成功！")
            }
        });
    })

});

function writeContent(div){
    var c=div.innerHTML;
    $("#content").val(c);
    div.parentNode.style.display="none";
}
function changeBgcolor(div){
    div.style.background="blue";
}
function turnBgcolor(div){
    div.style.background="";
}