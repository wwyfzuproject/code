
import java.util.UUID;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.CyclicBarrier;


public class GameMatchingMain {

    public static void main(String[] args) {
        CopyOnWriteArrayList<Integer> list = new CopyOnWriteArrayList<>();
        //2人开始游戏
        final int count = 2;

        //房间ID
        final String roomId=UUID.randomUUID().toString();

        final CyclicBarrier barrier = new CyclicBarrier(count, () ->
                System.out.println("房间ID:"+roomId+"匹配成功"+list));
        for (int i = 0; i < 2; i++) {
            list.add(i);
            new Thread(new PlayerIn(i, barrier,roomId,list)).start();
        }
    }
}