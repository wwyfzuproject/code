package Gamepac;

public class User {
    private String name;//昵称随便
    private String mail;//邮箱唯一标识
    private String password;//密码
    public int posi;//玩家在地图上位置
    int [] flag=new int[60];
    //flag用于记录该打卡点是否被打卡过
    int sum;//5个打卡点
    int cir;//circle记录用户走的圈数，用于限时模式

    public User() {
    }
    public User(String name, String mail, String password) {
        this.name = name;
        this.mail = mail;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }




}
