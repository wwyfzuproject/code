package Gamepac;

import java.util.Random;

import static java.lang.Math.max;

public class test {
    static int [] addr={13,19,28,33,41};//五个打卡点所在位置
    
    public static void main(String[] args) {
        int res=0;//如果从前端传来数据是限时模式则置为1
        int[] map=new int[60] ;
        //数组默认值为0，乘坐小白设为1，随机前进或后退若干步设为2
        map[6]=1;
        map[23]=1;
        map[38]=1;
        map[3]=2;
        map[8]=2;
        map[11]=2;
        map[16]=2;
        map[21]=2;
        map[26]=2;
        map[30]=2;
        map[36]=2;
        map[39]=2;
        map[43]=2;
        //new GameFrame();

        int [] goal=new int[60];
        goal[13]=1;
        goal[19]=1;
        goal[28]=1;
        goal[33]=1;
        goal[41]=1;//这几个点是打卡点

        User a=new User();
        User b=new User();
        a.posi=0;
        b.posi=0;
        a.sum=0;
        b.sum=0;
//初始位置为0，在东门
        //int n=10;
        //n是测试用的后面会删掉
        while (true){
            //n--;
            int r=new Random().nextInt(6)+1;
            //if(n==9) r=6;
            System.out.println("投掷骰子数为"+r+"  ");
            a.posi+=r;//随机摇骰子，玩家位置发生改变
            System.out.println("现在我走到了位置"+a.posi);
            if(a.posi>=45) {
                a.posi=a.posi-45;
                a.cir++;
                System.out.println("俺走完一圈啦");
                if(max(a.cir,b.cir)>=2&&res==1) break;//若限时模式且领先玩家的圈数大于二则结束游戏
            }
            //地图是一个圈
            //若走到打卡点
            if(goal[a.posi]==1&&a.flag[a.posi]==0){
                a.flag[a.posi]=1;
                a.sum++;
                if(a.sum==5) break;
                System.out.println("打卡成功！！位置是"+a.posi+"   ");
            }

            //若遇到小白
            if(map[a.posi]==1) {
                a.posi=Jump(a, a.posi);
                a.flag[a.posi]=1;
                a.sum++;
                if(a.sum>=5) break;
                System.out.println("遇到小白将我送到位置"+a.posi);
            }

            //若触发生成随机数
            if(map[a.posi]==2){
                //从前端返回用户选择是是自己前进/后退/对方前进后退
                //对用户a或b的位置做出改变
            }

//然后是b玩家，a的代码修改好后再复制过来

        }
        System.out.println("游戏结束我走了"+a.cir+"圈");

    }

    public static int Jump(User m,int posi){
        int i = 0,j;
        if(posi>0&&posi<13) i=1;
        else if (posi>19&&posi<28) i=3;
        else i=5;

        for(j=0;j<5;j++){
            if(m.flag[addr[i]]==0) break ;
            else {
                i++;
                if(i>=5) i=i-5;
            }

        }

        return addr[i];


    }

}
