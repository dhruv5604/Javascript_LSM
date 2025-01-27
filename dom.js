
function changeParaStyle(){

    const paraEle = document.getElementsByTagName("p");

    for(ele of paraEle){
        ele.style.color = "blue";
    }
}
function ChangePara1(){
    document.getElementById("para-1").style.color = "blue";
}

function ChangePara1Content(){
    document.getElementById("para-1").innerHTML = "Updated";
}

function changepara(){
    const paraEle = document.querySelectorAll("p.highlight");
    for(ele of paraEle){
        ele.style.color = "green";
    }
}

function changeClass(){
    const paraEle = document.getElementsByClassName("highlight");
    for(ele of paraEle){
        ele.style.color = "red";
    }
}


function addPart(){
    const ulEl = document.getElementById("parts");
    let liEl = document.createElement("li");
    
    let ipEl = document.getElementById("part");
    liEl.textContent = ipEl.value + " ";

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function(){
        ulEl.removeChild(liEl);
    }

    liEl.appendChild(removeBtn);

    ulEl.appendChild(liEl);

    ipEl.value = "";    

    ipEl.focus();
}