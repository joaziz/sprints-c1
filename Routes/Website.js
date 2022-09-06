const express = require("express");
const {ProductControllers} = require("../controllers/ProductControllers");
const websiteApp = express();


let productController = new ProductControllers();


websiteApp.get("/product", productController.list);


module.exports = {
    websiteApp
}
