const readline = require("readline")


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// let ask = (question, cb) => {
//     reader.question(question, (ans) => {
//         cb(ans)
//     });
// }
const ask = (question) => {
    return new Promise(function (cb, rej) {


        setTimeout(function () {
            cb((Math.random() * 1000).toFixed(0))
        }, Math.random() * 10000)


    });
}


// const ask = (question) => {
//     return new Promise(function (cb, rej) {
//
//
//         reader.question(question, (ans) => {
//
//
//             try {
//                 cb(ans)
//             } catch (err) {
//                 rej(err)
//             }
//
//
//         });
//
//
//     });
// }
//

async function Main() {
    let r = ask("what is your name") // 3s
    // console.log(r)
    let r1 = ask("what is your name") // 3s
    // console.log(r1)
    let r3 = ask("what is your name") // 3s
    // console.log(r3)
    let r4 = ask("what is your name") // 3s
    // console.log(r4)
    r.then(r => console.log("q1", r))
    r1.then(r => console.log("q2", r))
    r3.then(r => console.log("q3", r))
    r4.then(r => console.log("q4", r))
    // let results = await Promise.all([r, r1, r3, r4])

    // console.log(results)

}

Main();

// let q2 = ask("q2")

// p1 5
// p2 6

// -----
// ---
// 6s

// ask("what is your name : ")
//     .then((name) => ask("q1"))
//     .then((name) => ask("q2"))
//     .then((name) => ask("q3"))
//     .then((name) => ask("q4"))
//     .then()

// let p = new Promise(function (cb) {
//     cb("hi from promise")
// });
//
// p.then(function (result) {
//     console.log(result)
// });

// let ask = (question, cb) => {
//     reader.question(question, (ans) => {
//         cb(ans)
//     });
// }
//
//
// ask("q").then(function () {
//
// })

//
// ask("please enter your name : ", function (answer) { 5s
//     ask("please enter your name : ", function (answer) { 3s
// ------------------ 8s

//         ask("please enter your name : ", function (answer) {
//             ask("please enter your name : ", function (answer) {
//                 ask("please enter your name : ", function (answer) {
//                     ask("please enter your name : ", function (answer) {
//                         ask("please enter your name : ", function (answer) {
//                             ask("please enter your name : ", function (answer) {
//                                 ask("please enter your name : ", function (answer) {
//                                     ask("please enter your name : ", function (answer) {
//
//
//                                     })
//                                 })
//                             })
//                         })
//                     })
//
//                 })
//             })
//
//         })
//
//     })
// })


// ask("what is nationality", function (ans) {
//     console.log("welcome " + name + " from " + ans)
// })


// let i = 0;
//
//
// let Iid = setInterval(function () {
//     if (i === 4)
//         clearInterval(Iid)
//     console.log(Math.random() * 1000)
//     i++;
// }, 2000)


// for (let i = 0; i < 5; i++) {
//     console.log(Math.random() * 1000)
// }

