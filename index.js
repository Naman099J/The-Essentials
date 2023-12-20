let p=""
let x=Number(localStorage.getItem('num'))
let sum = Number(localStorage.getItem('sum'));
document.getElementById("tot").innerHTML=x

function add(val, price, src){
    if(localStorage.getItem('row')!=null){
        p=localStorage.getItem('row')
    }
    x++
    p=p+'<tr><td>'+x+'</td><td>'+'<img src=.'+src+' alt="">'+'</td><td>'+val+'</td><td>'+'₹'+price+'</td></tr>';

    localStorage.setItem('row',p)
    localStorage.setItem('num',x)

    let d=0;
    let sum1=0;
    if(x>0 && x<=5){
        d=0
    }
    else if(x>=6 && x<=10){
        d=5
    }
    else if(x>=11 && x<=15){
        d=10
    }
    else if(x>=16 && x<=20){
        d=15
    }
    else if(x>=21 && x<=25){
        d=20
    }
    else if(x>=26 && x<=30){
        d=25
    }
    else if(x>=31 && x<=35){
        d=30
    }
    else if(x>=36){
        d=35
    }
    else{
        d=0
    }

    sum += price;
    // t.innerHTML = '₹' + sum;
    sum1=sum-sum*d/100;
    // t1.innerHTML = '₹' + sum1;
    // dis1.innerHTML=d;

    localStorage.setItem('d',d)
    localStorage.setItem('sum',sum)
    localStorage.setItem('sum1',sum1)

    document.getElementById("tot").innerHTML=Number(localStorage.getItem('num'))
}
function clr(){
    localStorage.clear()
    x=0
    n=0
    d=0
    sum=0
    let sum2=0
    localStorage.setItem('num',x)
    localStorage.setItem('d',d)
    localStorage.setItem('sum',sum)
    localStorage.setItem('sum1',sum2)
    document.getElementById("tot").innerHTML=Number(localStorage.getItem('num'))
}
// localStorage.clear()
function change(loc){
    window.location.href=loc
}