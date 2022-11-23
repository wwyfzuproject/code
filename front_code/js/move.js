function animate(obj, target, num, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // var stepX = num*(-21);
        // var stepY = num*(-12);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // callback();
            console.log(target);
            console.log(player1.offsetLeft);
            console.log(player1.offsetTop);
        }
        else {
            // obj.style.left = obj.offsetLeft + stepX + 'px';
            // obj.style.bottom = obj.offsetTop + stepY +'px';
            obj.style.left = obj.style.left + 1 + 'px';
            obj.style.bottom = obj.style.bottom + 0.58 +'px';
        }
    },300)

}