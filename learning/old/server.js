const express = require("express");
const fs = require("fs");
const path = require("path");

let app = express();



app.get("/", function (req, res) {
    // write to file
    res.json({
        name: req.query.nn,
        age: "10y",
        isAdmin: true,
        id: 5,
        address: {
            "street": "street name",
            "number": "55",
            "city": "Cairo",
        }
    });


    // res.sendFile(path.join(__dirname, "front", "index.html"));
});

app.get("/about-us.html", function (req, res) {
    res.sendFile(path.join(__dirname, "front", "about-us.html"));
})
app.get("/search.html", function (req, res) {
    res.sendFile(path.join(__dirname, "front", "search.html"));
})

app.listen(7090, function () {
    console.log("server run on port 8090")
})
