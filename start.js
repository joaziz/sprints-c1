// javascript ++
// v8 eng ++
// optimization and add feature  ++
// ------------ nodejs

let path = require("path");
let fs = require("fs").promises;

// console.log()

fs.stat(path.join(__dirname, "..")).then((data) => {
    console.log(data)
})



// let Math = require("./Math")
// node package moudle
// npm
// console.log(Math.Rand(5, 9))
// let fs = require("fs").promises
// let fs = require("./?????????").promises
//
//
// fs.readFile("text.txt").then(function (data) {
//     console.log(data.toString("utf-8"))
// });

// fs.writeFile("text.txt", data.toString("utf-8") + "\n new data", function () {
//
// })
//
// fs.appendFile("text.txt", "\nthis is line 2", function () {
//     console.log("done")
// })
//
// fs.stat("text.txt", function (err, stats) {
//     console.log(stats)
// })
