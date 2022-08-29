// function DeactivateALlUser() {
// // database user deactivated
// }
//
// function DeactivateUser(userId) {
// // database user deactivated
// }
//
//
// function GetAllActiveUsers() {
//     return [
//         {user_id: 1},
//         {user_id: 10},
//         {user_id: 100}
//     ]
// }
//
// function GetUserInfoById(user_id) {
//     return [
//         {user_id: 100, name: "ali"}
//     ]
// }

// ----------------------------------
// | 1 no arg no output
// | 2 has arg no output
// | 3 no arg has output
// | 4 has arg has output


// const activUsers = GetAllActiveUsers();
//
//
// console.log(DeactivateALlUser())
// console.log(DeactivateUser(5))
// console.log(GetAllActiveUsers())
// console.log(GetUserInfoById(888))


// function GetUserInfoById(user_id) {
//     return [
//         {user_id: 100, name: "ali"}
//     ]
// }


// let Person = null

// Person.name
//
// (null).innerText


// function WriteTheNme(element, name) {
//     element.innerText = "Mr. " + name;
//     return name;
//     console.log("Mr. " + name);
//
// }
//
//
// let uname = prompt("what is your name")
//
// let element = document.getElementById("uname");
//
// if (element != null)
//     WriteTheNme(element, uname)
//
//
// let elements = document.getElementsByClassName("nm");
//
//
// for (const element1 of elements) {
//     WriteTheNme(element1, uname)
// }


// let sum = 1 + 1 + 7
// let result = 9
// let com = sum == result;
//
//
//
//
// // if statement
//
// if (com) {
//     // alert("true")
// }


// let color = "fsdfsdfsd  "
//
// if (color == "red")
//     document.getElementById("box").style.background = "red"
// else
//     document.getElementById("box").style.background = "blue"
//


let color = "red"
let dayTime = "night";

// 1&&1&&1&&1
// 1||0||0||0
// !1==0
// or ||
// and &&
// not !con
//
// if (!(color == "red"))
//     document.getElementById("box").style.background = "red"
// else
//     document.getElementById("box").style.background = "blue"


// let age2 = document.getElementById("age").value;

// if (age2 < 20)
//     alert("you are so young")
// else if (age2 > 20 && age2 < 30)
//     alert("20->30")
// else if (age2 > 30 && age2 < 40)
//     alert("30->40")
// else if (age2 > 40 && age2 < 50)
//     alert("40->50")
// else if (age2 > 50 && age2 < 80)
//     alert("50->80")
// else
//     alert("above 80")

// console.log(parseInt(age2))
//
//
// switch (parseInt(age2)) {
//     case 20:
//         alert("you are so young")
//         break;
//     case 30:
//         alert("30")
//         break;
//
// }


// document object mapping
// let tag = document.getElementById("id")
// let tagsArray = document.getElementsByClassName("class")
// let tag = document.getElementsByTagName("body")[0].innerText="sssssssssssssssssssssssssssssssss"

let InputElement = document.getElementById("age")
let InsdasdsdputElement = document.getElementById("age")

function dddd() {


}


function xfunction() {
    WriteToHTML(InputElement)
}

function WriteToHTML(InputElement) {
    let age2 = InputElement.value;
    document.getElementById("out").innerText = "you age is " + age2;
}

WriteToHTML(InputElement)

InputElement.addEventListener("change", xfunction)


setInterval(function () {
    InputElement.value = new Date();
    WriteToHTML(InputElement)
}, 1000)
