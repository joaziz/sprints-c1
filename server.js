const express = require("express");
const bodyParser = require('body-parser')

const {adminApp} = require("./Routes/Admin");
const {websiteApp} = require("./Routes/Website");

const app = express();
app.use(bodyParser.json())

app.use("/admin", adminApp)
app.use("/website", websiteApp)

const Port  = 8072;
app.listen(Port, function () {
    console.log("app start and listen to port " + Port)
})
