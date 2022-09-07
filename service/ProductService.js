const {find, findOne} = require("../DB/Base");
const {Product} = require("../DB/Product");

class ProductService {


    async list(user, page, limit) {

        if (!user || user == "guest")
            return [{name: "only 1 "}]
        let product = new Product();
        return await product.find()
    }

    async one(id) {
        let product = new Product();
        return await product.findOne(id)
    }
}




module.exports = {
    ProductService
}
