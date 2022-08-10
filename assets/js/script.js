// alert("from script file")

// console.log("this is from log4")
// console.log("this is from log")
// console.log("this is from log2")
// console.log("this is from log3")

// let const
// ---------------------------------------
//     |x|      y->9
// ---------------------------------------

let x = 5;
let y = 5;


// and &
// or |


// console.log(y < x | y == x)
// console.log(y == x)
// console.log(y >= x)
// console.log(y <= x)
// console.log(y > x)
// console.log(y < x)


//
// console.log(x);
// console.log(y);
// console.log(x)
// console.log(y % x)
// xxx y / x = 2.8
// xxx (y-1) / x = 2.6
// xxx (y-1) / x = 2.4
// xxx (y-1) / x = 2.2
// xxx (y-1) / x = 2

//
// console.log(x + y)
// console.log(y - x)
// console.log(y / x)
// console.log(x * y)
// console.log(x--)
// console.log(x++)
// console.log(++x)
// console.log(--x)


let n1 = 10;
let n2 = 5;
let n3 = 15;
let n4 = 30;

//dif 4
function SendSMS(phone, message) {
    console.log(`this message | ${message} will be send to this phone number ${phone}`)
    // console.log(`this message | ' + message + ' will be send to this phone number ' + ' phone');
}


//cal
SendSMS("01101201222", "this is a first message")
SendSMS("0144555555", "message 2 ")

//number 1 | 1.3 | 0.2
let age = 32;
age = "Omer"


//string "*?"
let name = "Ali";
// number
name = 5;
//boolean true | false
let student = false;
// array          0       1         2       3       n
let students = ["ALi", "Mahmoud", "Weal", "Jala", 11, true];
// Object
let Person = {
    name: "Sameh",
    age: 22,
    phone: "01225214",
    HasCar: true,

    address: {
        number: 22,
        street: "Oroba",
        city: "cairo"
    },

    printInfo() {
        console.log(`My name is ${this.name}`)
    }
}

students = ["ALi", "Mahmoud", "Weal", "Jala", 11, true];
students[0] = "Mostafa";
students[15] = "Mostafa";
console.log(students)

let Ahmed = Person;
console.log(Person.printInfo())
Person.name = "Mostafa"
console.log(Person.printInfo())
students[0] = "Yousif"
console.log(age)
console.log(students[0])

// console.log(((n3 + n4) * 4) + 20)
// console.log(((n1 + n3) * 4) + 20)
// console.log(((n2 + n4) * 4) + 20)

// let name = "Adel";
// let lastName = "Ali";
// console.log(name + " " + lastName);
// console.log(name - lastName);
// console.log(name / lastName);
// console.log(name * lastName);

// +-/ *


// operations


// let letf = 0;

//
// let element = document.getElementById("img");
//
//
//
// element.style.width = "500px"
// element.style.height = "800px"
//
// //
// setInterval(function () {
//
//     document.getElementById("img").style.left = letf + "px";
//     letf++;
// }, 50)
//
//
//
// setInterval(function () {
//     document.getElementById("img2").style.left = letf + "px";
//
//     letf++;
// }, 50)

















