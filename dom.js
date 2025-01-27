
function changeParaStyle(){
    
    const paraEle = document.getElementsByTagName("p");

    for(ele of paraEle){
        ele.style.color = "blue";
    }
}