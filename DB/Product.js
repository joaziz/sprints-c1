const {insertOne, find, findOne} = require("./Base");
const {ObjectId} = require("mongodb");

class Product {
    name = "product"


    insertOne(data) {
        return insertOne(this.name, data)
    }

    find(filter = {}) {
        return find(this.name, filter)
    }


    async findOne(id) {
        try {
            return await findOne(this.name, {_id: ObjectId(id)})
        } catch (e) {
            return null
        }
    }
}


module.exports = {
    Product
}
