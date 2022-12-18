var flag1 = 0;
var flag2 = 0;
function animate1(obj, time, num, num1,f,callback) {
    clearInterval(obj.timer);
    var target;
    // target = obj.offsetLeft + num * (-26);
    var flag = 0;
    obj.timer = setInterval(function () {
        // if (obj.offsetLeft <= target) {
        if (num == 0) {
            clearInterval(obj.timer);
            // console.log(target);
            console.log(obj.offsetLeft);
            console.log(obj.offsetTop);
            if(f==1)
            {
                callback(obj,time,num1,0,0,animate1);
            }
            else if(f==2){
                var suiji = document.getElementsByClassName("suijichoice1");
                for(iii=0;iii<suiji.length;iii++){
                    suiji[iii].style.display = "block";
                }
                document.getElementById('ziji1').addEventListener('click', onclick1)
                document.getElementById('duifang1').addEventListener('click', onclick2)
            }
            else remove(f);
            clock(time);
        }
        else {

            if ((obj.offsetLeft >= 587) && (obj.offsetTop <= 104)&&(flag1==0)) {

                if (flag == 0) {
                    target = obj.offsetLeft + num * (-26);
                    flag++;
                }

                var top = obj.offsetTop - 67;
                obj.style.left = obj.offsetLeft - 2 + 'px';
                obj.style.top = top - 1 + 'px';

                if ((obj.offsetLeft - target) % 26 == 0) {
                    num--;
                    target = obj.offsetLeft + num * (-26);
                    console.log(num);
                }
                // if(obj.offsetLeft==587) {
                //     target = obj.offsetLeft + num * (-29);
                // }
            }
            else if ((obj.offsetLeft < 587) && (obj.offsetTop < 204) && (obj.offsetLeft > 384)&&(flag1==0)) {

                if (flag < 2) {
                    target = obj.offsetLeft + num * (-28);
                    flag = 2;
                }

                var top = obj.offsetTop - 67;
                obj.style.left = obj.offsetLeft - 4 + 'px';
                obj.style.top = top + 3 + 'px';

                if ((obj.offsetLeft - target) % 28 == 0) {
                    num--;
                    target = obj.offsetLeft + num * (-28);
                    console.log(num);
                }
            }

            else if ((obj.offsetLeft <= 384) && (obj.offsetTop <= 204) && (obj.offsetLeft >= 195)&&(flag1==0)) {

                if (flag < 3) {
                    target = obj.offsetLeft + num * (-30);
                    flag = 3;
                }
                var top = obj.offsetTop - 67;
                obj.style.left = obj.offsetLeft - 2 + 'px';
                obj.style.top = top - 1 + 'px';

                if ((obj.offsetLeft - target) % 30 == 0) {
                    num--;
                    target = obj.offsetLeft + num * (-30);
                    console.log(num);
                }

            }

            else if ((obj.offsetLeft <= 193) && (obj.offsetTop <= 212) && (obj.offsetLeft >= 57)&&(flag1==0)) {
                if (flag < 4) {
                    target = obj.offsetLeft + num * (-28);
                    flag = 4;
                }

                var top = obj.offsetTop - 67;
                obj.style.left = obj.offsetLeft - 4 + 'px';
                obj.style.top = top + 3 + 'px';

                if ((obj.offsetLeft - target) % 28 == 0) {
                    num--;
                    target = obj.offsetLeft + num * (-28);
                    console.log(num);
                }

            }

            else if ((obj.offsetLeft >= 53) && (obj.offsetTop >= 215) && (obj.offsetLeft <= 351)&&(flag1==0)) {

                if (flag < 5) {

                    target = obj.offsetLeft + num * (30);
                    console.log('target = ' + target);
                    flag = 5;

                    console.log('flag = '+flag);
                }

                var top = obj.offsetTop - 67;
                obj.style.left = obj.offsetLeft + 2 + 'px';
                obj.style.top = top + 1 + 'px';

                if ((target - obj.offsetLeft) % 30 == 0) {
                    num--;
                    target = obj.offsetLeft + num * (30);
                    console.log(num);

                    if(obj.offsetLeft==353)
                    {
                        flag1 = 1;
                    }
                }
            }

            else if((obj.offsetLeft>=353)&&(obj.offsetTop<=365)&&(flag1==1))
            {
                if (flag < 6) {
                    target = obj.offsetLeft + num * (28);
                    flag = 6;

                    console.log('flag = '+flag);
                }

                var top = obj.offsetTop - 67;
                obj.style.left = obj.offsetLeft + 4 + 'px';
                obj.style.top = top - 3 + 'px';

                if ((target - obj.offsetLeft) % 28 == 0) {
                    num--;
                    target = obj.offsetLeft + num * (28);
                    console.log(num);
                }

                if(obj.offsetLeft==689)
                {
                    num--;
                    obj.style.left = 691 + 'px';
                    obj.style.top = 37 + 'px';
                    flag1 = 0;
                }
            }

            // num--;

        }
        
    }, 100)

}
function animate2(obj, time, num, num2,f,callback) {
    clearInterval(obj.timer);
    var target, flag;
    flag = 0;
    // var target = obj.offsetLeft + num * (-30);
    obj.timer = setInterval(function () {
        if (num == 0) {
            // if (obj.offsetLeft <= target) {
            clearInterval(obj.timer);
            console.log(target);
            console.log(obj.offsetLeft);
            console.log(obj.offsetTop);
            if(f==1)
            {
                callback(obj,time,num2,0,0,animate2);
            }
            else if(f==2){
                var suiji = document.getElementsByClassName("suijichoice2");
                for(iii=0;iii<suiji.length;iii++){
                    suiji[iii].style.display = "block";
                }
                document.getElementById('ziji2').addEventListener('click', onclick3)
                document.getElementById('duifang2').addEventListener('click', onclick4)
            }
            else remove(f);
            clock(time);
        }
        else {

            // var top = obj.offsetTop - 135;
            // obj.style.left = obj.offsetLeft - 2 + 'px';
            // obj.style.top = top - 1 + 'px';

            if ((obj.offsetLeft > 602) && (obj.offsetTop <= 103)&&(flag2==0)) {

                if (flag == 0) {
                    target = obj.offsetLeft + num * (-30);
                    flag++;
                }

                var top = obj.offsetTop - 135;
                obj.style.left = obj.offsetLeft - 2 + 'px';
                obj.style.top = top - 1 + 'px';

                if ((obj.offsetLeft - target) % 30 == 0) {
                    num--;
                    target = obj.offsetLeft + num * (-30);
                    console.log(num);
                }

            }
            else if ((obj.offsetLeft <= 602) && (obj.offsetTop <= 208) && (obj.offsetLeft >= 382)&&(flag2==0)) {

                if (flag < 2) {
                    target = obj.offsetLeft + num * (-32);
                    flag = 2;
                }

                var top = obj.offsetTop - 135;
                obj.style.left = obj.offsetLeft - 4 + 'px';
                obj.style.top = top + 3 + 'px';

                if ((obj.offsetLeft - target) % 32 == 0) {
                    num--;
                    target = obj.offsetLeft + num * (-32);
                    console.log(num);
                }


            }

            else if ((obj.offsetLeft <= 378) && (obj.offsetTop <= 211) && (obj.offsetLeft >= 188)&&(flag2==0)) {

                if (flag < 3) {
                    target = obj.offsetLeft + num * (-32);
                    flag = 3;
                }
                var top = obj.offsetTop - 135;
                obj.style.left = obj.offsetLeft - 2 + 'px';
                obj.style.top = top - 1 + 'px';

                if ((obj.offsetLeft - target) % 32 == 0) {
                    num--;
                    target = obj.offsetLeft + num * (-32);
                    console.log(num);
                }

            }

            else if ((obj.offsetLeft <= 186) && (obj.offsetTop <= 217) && (obj.offsetLeft >= 50)&&(flag2==0)) {

                if (flag < 4) {
                    target = obj.offsetLeft + num * (-28);
                    flag = 4;
                }

                var top = obj.offsetTop - 135;
                obj.style.left = obj.offsetLeft - 4 + 'px';
                obj.style.top = top + 3 + 'px';

                if ((obj.offsetLeft - target) % 28 == 0) {
                    num--;
                    target = obj.offsetLeft + num * (-28);
                    console.log(num);
                }

            }

            else if ((obj.offsetLeft >= 46) && (obj.offsetTop >= 220) && (obj.offsetLeft <= 344)&&(flag2==0)) {

                if (flag < 5) {

                    target = obj.offsetLeft + num * (30);
                    console.log('target = ' + target);
                    flag = 5;
                }

                var top = obj.offsetTop - 135;
                obj.style.left = obj.offsetLeft + 2 + 'px';
                obj.style.top = top + 1 + 'px';

                if ((target - obj.offsetLeft) % 30 == 0) {
                    num--;
                    target = obj.offsetLeft + num * (30);
                    console.log(num);
                    if(obj.offsetLeft==346)
                    {
                        flag2 = 1;
                    }
                }
            }

            else if((obj.offsetLeft>=346)&&(obj.offsetTop<=370)&&(flag2==1))
            {
                if (flag < 6) {
                    target = obj.offsetLeft + num * (28);
                    flag = 6;
                }

                var top = obj.offsetTop - 135;
                obj.style.left = obj.offsetLeft + 4 + 'px';
                obj.style.top = top - 3 + 'px';

                if ((target - obj.offsetLeft) % 28 == 0) {
                    num--;
                    target = obj.offsetLeft + num * (28);
                    console.log(num);
                }
                if(obj.offsetLeft==722)
                {
                    num--;
                    obj.style.left = 722 + 'px';
                    obj.style.top = -32 + 'px';
                    flag2 = 0;
                }
            }
        }
    }, 100)

}

function clock(obj) {
    clearInterval(obj.timer);
    var time = 10;
    obj.timer = setInterval(function () {
        if (time == 0) {
            clearInterval(obj.timer);
            obj.innerHTML = '倒计时';
        }
        else {
            obj.innerHTML = time;
            time--;
        }
    }, 1000);
}

function getnum() {
    return Math.floor(Math.random() * 6) + 1;
}
function Jump(posi){
    if(posi==7) return 12;
    else if (posi==22) return 26;
    else if (posi==39) return 45;

}
