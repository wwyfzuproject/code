function Aplayer(num){
    var num1=0;
    play_flag=-1;
    if(aposi>=45) {
        aposi=aposi-45;
        acir++;
        if((acir>=2||bcir>=2)&&res==1) {
            for(iii=0;iii<judge.length;iii++){
                judge[iii].style.display = "block";
            }
        }//若限时模式且领先玩家的圈数大于二则结束游戏
        //跳转界面
    }
    if(map[aposi]==1) {//若遇到小白
        var apo;
        apo = Jump(aposi);
        num1 = apo-aposi;
        aposi = apo;

        if(aflag[aposi]==0)
        {
            aflag[aposi]=1;
            asum++;
        }
        clearInterval(time.timer);
        animate1(player1, time,num,num1,1,animate1);
        if(asum>=5){
            for(iii=0;iii<judge.length;iii++){
                judge[iii].style.display = "block";
            }
        }
    }
    else {
        if(map[aposi]==0){//普通棋子+打卡点
            if(goal[aposi]==1){//打卡点
                animate1(player1, time,num,num1,3,animate1);
                if(aflag[aposi]==0){
                    aflag[aposi]=1;
                    asum++;
                }
                if(asum==5) {
                    for( iii=0;iii<judge.length;iii++){
                        judge[iii].style.display = "block";
                    }
                }
            }
            else animate1(player1, time,num,num1,0,animate1);
        }
        else {//选择点
            play_flag=1;
            animate1(player1, time,num,num1,2,animate1);
        }
        if(aposi>=45) {
            aposi=aposi-45;
            acir++;
            if((acir>=2||bcir>=2)&&res==1) {
                for(iii=0;iii<judge.length;iii++){
                    judge[iii].style.display = "block";
                }
            }//若限时模式且领先玩家的圈数大于二则结束游戏
            //跳转界面
        }
    }

}
function Bplayer(num){
    var num2=0;
    play_flag=-1;
    if(bposi>=45) {
        bposi=bposi-45;
        bcir++;
        if((acir>=2||bcir>=2)&&res==1){
            for( iii=0;iii<judge.length;iii++){
                judge[iii].style.display = "block";
            }
        }//若限时模式且领先玩家的圈数大于二则结束游戏
    }
    if(map[bposi]==1) {//若遇到小白
        var bpo;
        bpo = Jump(bposi);
        num2 = bpo-bposi;
        bposi = bpo;

        if(bflag[bposi]==0)
        {
            bflag[bposi]=1;
            bsum++;
        }
        clearInterval(time.timer);
        animate2(player2, time,num,num2,1,animate2);
        if(bsum>=5) {
            for( iii=0;iii<judge.length;iii++){
                judge[iii].style.display = "block";
            }
        }
    }
    else{
        if(map[bposi]==0)
        {
            if(goal[bposi]==1){
                animate2(player2, time,num,num2,3,animate2);
                if(bflag[bposi]==0){
                    bflag[bposi]=1;
                    bsum++;
                }
                if(bsum==5){
                    for( iii=0;iii<judge.length;iii++){
                        judge[iii].style.display = "block";
                    }
                }
            }
            else animate2(player2, time,num,num2,0,animate2);
        }
        else{//选择
            play_flag=2;
            animate2(player2, time,num,num2,2,animate2);
        }
    }
    if(bposi>=45) {
        bposi=bposi-45;
        bcir++;
        if((acir>=2||bcir>=2)&&res==1){
            for( iii=0;iii<judge.length;iii++){
                judge[iii].style.display = "block";
            }
        }//若限时模式且领先玩家的圈数大于二则结束游戏
    }
}