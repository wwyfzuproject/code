var addr=[4,12,17,26,32];//五个打卡点所在位置
var aposi=0;
var bposi=0;
var asum=0;
var bsum=0;
var acir=0;
var bcir=0;
var aflag=new Array;
var bflag=new Array;

var map=new Array();//数组默认值为0，乘坐小白设为1，随机前进或后退若干步设为2
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

var goal=new Array();
goal[4]=1;
goal[12]=1;
goal[17]=1;
goal[26]=1;
goal[32]=1;//这几个点是打卡点
var res;