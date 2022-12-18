var addr=[4,12,17,26,32];//五个打卡点所在位置
var choice_flag=0;
var play_flag;
var aposi=0;
var bposi=0;
var asum=0;
var bsum=0;
var acir=0;
var bcir=0;
var aflag=new Array();
var bflag=new Array();

var map=new Array();//数组默认值为0，乘坐小白设为1，随机前进或后退若干步设为2
var pos;
map[7]=1;
map[22]=1;
map[39]=1;

map[2]=2;
map[6]=2;
map[9]=2;
map[15]=2;
map[19]=2;
map[24]=2;
map[29]=2;
map[34]=2;
map[37]=2;
map[42]=2;

for(pos=0;pos<=45;pos++){
    if(map[pos]!=1&&map[pos]!=2){
        map[pos]=0;
    }
}

var goal=new Array();
goal[4]=1;
goal[12]=1;
goal[17]=1;
goal[26]=1;
goal[32]=1;//这几个点是打卡点

for(pos=0;pos<=45;pos++){
    if(goal[pos]!=1){
        goal[pos]=0;
    }
}
for(pos=0;pos<=45;pos++){
    aflag[pos]=0;
    bflag[pos]=0;

}

//取出url中“？”后的res值
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null)
         return (r[2]);
         return null;
}
var res= GetQueryString('res');//给res赋值

var endjudge1 = document.getElementsByClassName("win1-over");
var endjudge2 = document.getElementsByClassName("win11-over");

var dakajudge1 = document.getElementsByClassName("win2-daka1");
var dakajudge2 = document.getElementsByClassName("win2-daka2");
var dakajudge3 = document.getElementsByClassName("win2-daka3");
var dakajudge4 = document.getElementsByClassName("win2-daka4");
var dakajudge5 = document.getElementsByClassName("win2-daka5");

var iii=0;
// alert(res);
