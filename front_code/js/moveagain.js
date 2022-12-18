function remove(f){
    if(f==3){
        for( iii=0;iii<dakajudge1.length;iii++){
            dakajudge1[iii].style.display = "block";
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