const express = require("express");
const path = require("path");
const {checkAuthentication, LogAllRequests} = require("./Middel");
const {
    saveUserController,
    ListUsersController,
    ViewUserController,
    UpdateUserController,
    DeleteUserController
} = require("./Controller");

const app = express();

app.use(LogAllRequests());

// app.get("/save-user", saveUserController)
// app.get("delete-user/:id", DeleteUserController)
// app.get("/update-user/:id", UpdateUserController)
// app.get("/view-user-details/:id", checkAuthentication(), ViewUserController)
// app.get("/list-users", LogAllRequests(), checkAuthentication(), ListUsersController)

// - website
//     - guest user
//     - auth user
// -admin




app.listen(8080, function () {
    console.log("server run on port 8080")
})
