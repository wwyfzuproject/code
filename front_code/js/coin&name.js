$(function(){
    // 金币数显示
    var coinNum = $("#coinNum");
    // var resp1 = getCookie('money');
    var resp1 = 'abc';   
    coinNum.html(resp1);
    // 用户名显示
    var name = $("#name");
    // var resp2 = getCookie('username');
    var resp2 = 'name';
    name.html(resp2);
    
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

// $(function(){
//     $("#coinNum").html("金币");
//     $("#name").html("mingz");
// })