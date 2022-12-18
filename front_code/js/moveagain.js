function remove(f){//4 12 17 26 32
    if(f==3){
        for( iii=0;iii<dakajudge1.length;iii++){
            dakajudge1[iii].style.display = "block";
        }
        if(aposi==4){
            var lis = document.querySelectorAll("li");
            lis[0].style.backgroundColor="red";
        }
        if(bposi==4){
            var lis = document.querySelectorAll("li");
            lis[5].style.backgroundColor="red";
        }
        document.getElementById('pic1').addEventListener('click', function (e) {
            for( iii=0;iii<dakajudge1.length;iii++){
                dakajudge1[iii].style.display = "none";
            }
        })
    }
    else if(f==4){
        for( iii=0;iii<dakajudge2.length;iii++){
            dakajudge2[iii].style.display = "block";
        }
        if(aposi==12){
            var lis = document.querySelectorAll("li");
            lis[1].style.backgroundColor="red";
        }
        if(bposi==12){
            var lis = document.querySelectorAll("li");
            lis[6].style.backgroundColor="red";
        }
        document.getElementById('pic2').addEventListener('click', function (e) {
            for( iii=0;iii<dakajudge2.length;iii++){
                dakajudge2[iii].style.display = "none";
            }
        })
    }
    else if(f==5){
        for( iii=0;iii<dakajudge3.length;iii++){
            dakajudge3[iii].style.display = "block";
        }
        if(aposi==17){
            var lis = document.querySelectorAll("li");
            lis[2].style.backgroundColor="red";
        }
        if(bposi==17){
            var lis = document.querySelectorAll("li");
            lis[7].style.backgroundColor="red";
        }
        document.getElementById('pic3').addEventListener('click', function (e) {
            for( iii=0;iii<dakajudge3.length;iii++){
                dakajudge3[iii].style.display = "none";
            }
        })
    }
    else if(f==6){
        for( iii=0;iii<dakajudge4.length;iii++){
            dakajudge4[iii].style.display = "block";
        }
        if(aposi==26){
            var lis = document.querySelectorAll("li");
            lis[3].style.backgroundColor="red";
        }
        if(bposi==26){
            var lis = document.querySelectorAll("li");
            lis[8].style.backgroundColor="red";
        }
        document.getElementById('pic4').addEventListener('click', function (e) {
            for( iii=0;iii<dakajudge4.length;iii++){
                dakajudge4[iii].style.display = "none";
            }
        })
    }
    else if(f==7){
        for( iii=0;iii<dakajudge5.length;iii++){
            dakajudge5[iii].style.display = "block";
        }
        if(aposi==32){
            var lis = document.querySelectorAll("li");
            lis[4].style.backgroundColor="red";
        }
        if(bposi==32){
            var lis = document.querySelectorAll("li");
            lis[9].style.backgroundColor="red";
        }
        document.getElementById('pic5').addEventListener('click', function (e) {
            for( iii=0;iii<dakajudge5.length;iii++){
                dakajudge5[iii].style.display = "none";
            }
        })
    }
    else if(f==0){//12 26
        if(aposi==12||bposi==12){
            remove(4);
        }
        else if(aposi==26||bposi==26){
            remove(6);
        }
    }
}
