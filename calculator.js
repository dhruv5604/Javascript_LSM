
function addition(){
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    
    document.getElementById("result").value = num1+num2;
}

document.getElementById("add").addEventListener("click",addition);

function sub(){
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    
    document.getElementById("result").value = num1-num2;
}

document.getElementById("sub").addEventListener("click",sub);

function mul(){
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    
    document.getElementById("result").value = num1*num2;
}

document.getElementById("mul").addEventListener("click",mul);

function div(){
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    
    document.getElementById("result").value = num1/num2;
}

document.getElementById("div").addEventListener("click",div);