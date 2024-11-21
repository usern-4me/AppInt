var arrx=[];
var arry=[];
var wyn = [];
for(i = 0;i<100;i++){
    arrx.push(Math.floor(Math.random() * 40));
    arry.push(Math.floor(Math.random() * 40));
}
let n,m,x;
for(i = 0;i<100;i++){
    n = Math.abs(arrx[i] - 20);
    m = Math.abs(arry[i] - 20);
    x = Math.pow(n,2) + Math.pow(m,2);
    x = Math.sqrt(x);
    if(x<=2){
        wyn.push(10);
    }
    else if(2<x<=4){
        wyn.push(9);
    }
    else if(4<x<=6){
        wyn.push(8);
    }
    else if(6<x<=8){
        wyn.push(7);
    }
    else if(8<x<=10){
        wyn.push(6);
    }
    else if(10<x<=12){
        wyn.push(5);
    }
    else if(12<x<=14){
        wyn.push(4);
    }
    else if(14<x<=16){
        wyn.push(3);
    }
    else if(16<x<=18){
        wyn.push(2);
    }
    else if(18<x<=20){
        wyn.push(1);
    }
    else if(20<x){
        wyn.push(0);
    }
}
