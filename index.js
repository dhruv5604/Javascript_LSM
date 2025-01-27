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