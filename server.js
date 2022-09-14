const express = require("express");
const bodyParser = require('body-parser')
const {createServer} = require("http");


const path = require("path");
const {adminApp} = require("./Routes/Admin");
const {websiteApp} = require("./Routes/Website");

const app = express();
const httpServer = createServer(app);
// app.use("assets",express.static("front/assets"))
app.use(bodyParser.json())

app.use("/admin", adminApp)
app.use("/website", websiteApp)


app.get("/", function (req, res) {
    return res.sendFile(path.join(__dirname, "home.html"));
})


const {Server} = require("socket.io");


const io = new Server(httpServer, { /* options */});

io.on("connection", (socket) => {

    socket.on("send_message", function (message) {
        io.emit("podcast", message)
    })
});


const Port = 8072;
httpServer.listen(Port, function () {
    console.log("app start and listen to port " + Port)
})
