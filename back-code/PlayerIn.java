

import java.util.List;
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.CyclicBarrier;/*栅栏*/
import java.util.stream.Collectors;



public class  PlayerIn implements Runnable {
    final int id;
    final CyclicBarrier barrier;
    final String roomId;
    final CopyOnWriteArrayList<Integer> list;
    public PlayerIn(final int id, final CyclicBarrier barrier,String roomId,CopyOnWriteArrayList<Integer> list) {
        this.id = id;
        this.barrier = barrier;
        this.roomId=roomId;
        this.list=list;
    }

    @Override
    public void run() {
        try {
            System.out.println("玩家"+this.id + "进入");
            System.out.println("系统匹配中......");
            Thread.sleep((long) (Math.random() * 10000));
            List<Integer> result = list.stream().filter(s -> s != id).collect(Collectors.toList());
            System.out.println("玩家"+this.id +"在房间"+roomId+ "匹配到玩家"+result);
            this.barrier.await();
        } catch (InterruptedException e) {
            e.printStackTrace();//在命令行打印异常信息在程序中出错的位置及原因。
        } catch (BrokenBarrierException e) {
            e.printStackTrace();//在命令行打印异常信息在程序中出错的位置及原因。
        }
    }
}