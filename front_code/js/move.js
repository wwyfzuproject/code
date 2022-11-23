function animate1(obj, target, num, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        if (obj.offsetLeft <= target) {
            clearInterval(obj.timer);
            console.log(target);
            console.log(player1.offsetLeft);
            console.log(player1.offsetTop);
        }
        else {
            var top = obj.offsetTop - 67;
            obj.style.left = obj.offsetLeft - 2 + 'px';
            obj.style.top = top - 1 +'px';
        }
    },100)

}
function animate2(obj, target, num, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        if (obj.offsetLeft <= target) {
            clearInterval(obj.timer);
            console.log(target);
            console.log(player1.offsetLeft);
            console.log(player1.offsetTop);
        }
        else {
            var top = obj.offsetTop - 135;
            obj.style.left = obj.offsetLeft - 2 + 'px';
            obj.style.top = top - 1 +'px';
        }
    },100)

}