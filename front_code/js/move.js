function animate1(obj, time, num, callback) {
    clearInterval(obj.timer);
    var target, flag;
    // target = obj.offsetLeft + num * (-26);
    flag = 0;
    obj.timer = setInterval(function () {
        // if (obj.offsetLeft <= target) {
            if (num==0) {
            clearInterval(obj.timer);
            console.log(target);
            console.log(player1.offsetLeft);
            console.log(player1.offsetTop);
            clock(time);
        }
        else {

            if ((obj.offsetLeft >= 587) && (obj.offsetTop <= 104)) {

                if(flag==0) {
                    target = obj.offsetLeft + num * (-26);
                    flag++;
                } 

                var top = obj.offsetTop - 67;
                obj.style.left = obj.offsetLeft - 2 + 'px';
                obj.style.top = top - 1 + 'px';
                
                if((obj.offsetLeft - target)%26==0) {
                    num--;
                    target = obj.offsetLeft + num * (-26);
                    console.log(num);
                }
                // if(obj.offsetLeft==587) {
                //     target = obj.offsetLeft + num * (-29);
                // }
            }
            else if ((obj.offsetLeft < 587) && (obj.offsetTop <= 202) && (obj.offsetLeft > 384)) {

                if(flag<2) {
                    target = obj.offsetLeft + num * (-28);
                    flag = 3;
                }
                
                var top = obj.offsetTop - 67;
                obj.style.left = obj.offsetLeft - 4 + 'px';
                obj.style.top = top + 3 + 'px';

                if((obj.offsetLeft - target)%28==0) {
                    num--;
                    target = obj.offsetLeft + num * (-28);
                    console.log(num);
                }
            }

            // num--;
        }
    }, 100)

}
function animate2(obj, time, num, callback) {
    clearInterval(obj.timer);
    var target = obj.offsetLeft + num * (-30);
    obj.timer = setInterval(function () {
        if (obj.offsetLeft <= target) {
            clearInterval(obj.timer);
            console.log(target);
            console.log(player1.offsetLeft);
            console.log(player1.offsetTop);
            clock(time);
        }
        else {
            var top = obj.offsetTop - 135;
            obj.style.left = obj.offsetLeft - 2 + 'px';
            obj.style.top = top - 1 + 'px';
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