const express = require("express");
const {ProductControllers} = require("../controllers/ProductControllers");
const {BrandControllers} = require("../controllers/BrandControllers");
const {AuthControllers} = require("../controllers/AuthControllers");
const {AdminMiddleware} = require("../Middelwears/AdminMiddelwear");
const adminApp = express();

adminApp.use(AdminMiddleware)

let productController = new ProductControllers();
let authControllers = new AuthControllers();
let brandControllers = new BrandControllers();


//list
adminApp.get("/product", productController.list);
//create
adminApp.post("/product", productController.create);
//update
adminApp.put("/product/:id", productController.update);
adminApp.get("/product/:id", productController.viewOne);
//delete
adminApp.delete("/product/:id", productController.delete);
//change status
adminApp.put("/product/:id/change-status", productController.changeStatus);

// -----------------
//list
adminApp.get("/brands", brandControllers.list);
//create
adminApp.post("/brands", brandControllers.create);
//update
adminApp.put("/brands/:id", brandControllers.update);
//delete
adminApp.delete("/brands/:id", brandControllers.delete);
// -----------------
// auth
adminApp.post("/auth/login", authControllers.login);
adminApp.post("/auth/register", authControllers.register);
adminApp.post("/auth/forget-apswwrod", authControllers.forgetPassword);
adminApp.post("/auth/reset-apswwrod", authControllers.resetPassword);


module.exports = {
    adminApp
}
