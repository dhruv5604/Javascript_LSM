// const URL = "https://cat-fact.herokuapp.com/facts";
// let para = document.getElementById("demo");



// const getFacts = async ()=>{
//     console.log("Getting response...");
//     const response = await fetch(URL);
//     // console.log(response);
//     let data = await response.json();
//     para.innerHTML = data[0].text;
//     console.log("saffb");
// }

// //using promise chain

// function getFacts2(){
//     fetch(URL)
//         .then((response)=>{
//             return response.json();
//         })
//         .then((data)=>{
//             console.log(data);
//             para.innerHTML = data[4].text;
//         })
// }

// document.getElementById("btn").addEventListener("click",getFacts2);

const BASE_URl = "https://latest.currency-api.pages.dev/v1/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");


for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

// console.log(btn);

async function changeCurrency() {
    // evt.preventDefault();
    let amount = document.getElementById("ip");
    let amtval = amount.value;
    if(amtval === "" || amtval < 0){
        amtval = 1;
        amount.value = "1";
    }
    
    let ip = document.getElementById("ip").value;
    let lowerFrom =  from.value.toLowerCase();
    let lowerTo = to.value.toLowerCase();
    console.log(lowerFrom);

    const URL = `${BASE_URl}/${lowerFrom}.json`;
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log();
    let rate = data[lowerFrom][lowerTo];
    console.log(rate*ip);

    document.getElementById("msg").value = rate * ip;
}