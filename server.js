const express = require("express");

const {adminApp} = require("./Routes/Admin");
const {websiteApp} = require("./Routes/Website");

const app = express();


app.use("/admin", adminApp)
app.use("/website", websiteApp)


app.listen(8080, function () {
    console.log("app start and listen to port " + 8080)
})
