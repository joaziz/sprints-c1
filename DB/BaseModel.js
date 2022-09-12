const {ObjectId} = require("mongodb");
const {deleteOne, insertOne, find, findOne, update} = require("./Base");

class BaseModel {
    name;


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


    async update(id, params) {
        try {
            return await update(this.name, id, params)
        } catch (e) {
            return null
        }
    }

    async delete(id) {
        try {
            return await deleteOne(this.name, id)
        } catch (e) {
            return null
        }
    }
}
module.exports = {
    BaseModel
}
