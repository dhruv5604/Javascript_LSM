const person = {
    firstName: "Dhruv",
    lastName: "Solanki",
    age: 21
}

for (let x in person) {
    document.getElementById("demo").innerHTML += person[x] + " ";
}

function Student(name,age,dept){
    this.name = name;
    this.age = age;
    this.dept = dept;
}
   
const st1 = new Student("Dhruv",21,"IT");

document.getElementById("demo1").innerHTML = st1.name + " " + st1.age + " " + st1.dept;

st1.marks = 85;

document.getElementById("demo1").innerHTML += " " + st1.marks;

Student.prototype.status = "Pass";

document.getElementById("demo1").innerHTML += " " + st1.status;


let text="";
for(let i=0;i<10;i++){
    text+="The number is " + i + "<br>";
}

document.getElementById("demo2").innerHTML = text;
///////////////////

let text1="";
const arr = ["Apple","Banana","Grapes","Orange"];
for(let i=0;i<arr.length;i++){
    document.getElementById("demo3").innerHTML += arr[i] + "<br>";
}

let text2="";
let str = "Dhruv";
for(let x of str){
    document.getElementById("demo4").innerHTML += x + "<br>";
}
document.getElementById("demo4").innerHTML +=  "<br>";
///set

const set = new Set(["a","b","c"]);
for(let x of set){
    document.getElementById("demo4").innerHTML += x + "<br>";
}

// class car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }

//     age(){
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// const mycar = new car("Virtus",2020);

// document.getElementById("demo4").innerHTML += "My car is " + mycar.age() + " years ago";

/////////class

class car{
    constructor(brand){
        this.carname = brand;
    }

    present(){
        return 'I have a ' + this.carname;
    }

    static hello(x){
        return "<br> Hello " + x.carname;
    }
}

class Model extends car{
    constructor(brand,mod){
        super(brand);
        this.mod = mod;
    }

    show(){
        return this.present() + ' , It is a ' + this.mod;
    }
}


let mycar1 = new Model('ford','mustang');
document.getElementById("demo4").innerHTML += mycar1.show();

document.getElementById("demo4").innerHTML += car.hello(mycar1);


///map 

function triple(n){
    return n*3;
}

maparr = new Array(1,2,3,4,5);
console.log(maparr);
new_maparr = maparr.map(triple);
console.log(new_maparr);


////Reduce

// function multiply(a,b){
//     return a*b;
// }

reduceArr = new Array(1,2,3,4,5);
console.log(reduceArr);
var productOfArr = reduceArr.reduce((a,b)=>{
    return a*b;
});
console.log("Product is ",productOfArr);


//filter

filter_arr = new Array(1,2,3,4,5,6,7,8);
console.log(filter_arr);
new_filterArr = filter_arr.filter((x)=>{
    return x%2==0;
})
console.log(new_filterArr);

////Debounce

// let btn = document.getElementById("btn");

// const debounce = (func,delay) => {
//     let debounceTimer;
//     return function(){
//         const context = this;
//         const args = arguments;
//         clearTimeout(debounceTimer);
//         debounceTimer = setTimeout(()=>
//             func.apply(context,args),delay);
//     }
// }

// btn.addEventListener('click', debounce(function(){
//     alert("Hello world");
// },3000))

const ip = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounce(text=>{
    debounceText.textContent = text;
})

ip.addEventListener("input", e =>{
    defaultText.textContent = e.target.value;
    updateDebounceText(e.target.value);
})

function debounce(cb,delay=1000){
    let timeout;

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            cb(...args);
        },delay);
    }
}


///local storage

// const key = prompt("Enter the key")
// const value = prompt("Enter the value")

// localStorage.setItem(key,value)
// console.log(localStorage.getItem(key))

window.onstorage = (e) => {
    alert('changed');
    console.log(e);
}