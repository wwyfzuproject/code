function Aplayer(num){
    var num1=0;
    play_flag=-1;
    if(aposi>=45) {
        aposi=aposi-45;
        acir++;
    }
    win_lose_jugde();
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
            win_lose_jugde();
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
                   win_lose_jugde();
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
            if((acir>=2)&&res==1) {//限时模式下A赢了
                win_lose_jugde();
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
        //若限时模式且领先玩家的圈数大于二则结束游戏
    }
    win_lose_jugde();//先判断是否有玩家符合结束游戏的条件
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
        if(bsum>=5) {//b满5个打卡点
            win_lose_jugde();
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
                if(bsum==5){//b满5个打卡点
                    win_lose_jugde();
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
        win_lose_jugde();
    }
}
function win_lose_jugde(){

    if(res==1){//限时模式
        if(bcir >=2){//b玩家赢了
            for( iii=0;iii<endjudge2.length;iii++){
                endjudge2[iii].style.display = "block";
            }
            document.getElementById('b2').addEventListener('click', function (e) {
                location.href = "../HTML/single-invitesuccess.html";
            })
        }
        else if(acir>=2){//a win
            for(iii=0;iii<endjudge1.length;iii++){
                endjudge1[iii].style.display = "block";
            }
            document.getElementById('b1').addEventListener('click', function (e) {
                location.href = "../HTML/single-invitesuccess.html";
            })
        }
    }//若限时模式且领先玩家的圈数大于二则结束游戏

    if(asum==5){//a打满五个点，a赢
        for(iii=0;iii<endjudge1.length;iii++){
            endjudge1[iii].style.display = "block";
        }
        document.getElementById('b1').addEventListener('click', function (e) {
            location.href = "../HTML/single-invitesuccess.html";
        })
    }
    if(bsum==5){
        for( iii=0;iii<endjudge2.length;iii++){
            endjudge2[iii].style.display = "block";
        }
        document.getElementById('b2').addEventListener('click', function (e) {
            location.href = "../HTML/single-invitesuccess.html";
        })
    }

}