function animate1(obj, target, time, num, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        if (obj.offsetLeft <= target) {
            clearInterval(obj.timer);
            console.log(target);
            console.log(player1.offsetLeft);
            console.log(player1.offsetTop);
            clock(time);
        }
        else {
            var top = obj.offsetTop - 67;
            obj.style.left = obj.offsetLeft - 2 + 'px';
            obj.style.top = top - 1 + 'px';
        }
    }, 100)

}
function animate2(obj, target, time, num, callback) {
    clearInterval(obj.timer);
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
    return Math.floor(Math.random()*6) + 1;
}