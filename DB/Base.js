const Mongo = require("mongodb")
const {ObjectId} = require("mongodb");
const MongoClient = Mongo.MongoClient;

function MongoConnect(url) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (error, db) {
            if (error)
                return reject(error)
            resolve(db)
            // db.close()
        })
    });
}

function insertOne(collectionName, data) {
    return new Promise((resolve, reject) => {
        MongoConnect("mongodb://localhost:27017")
            .then(db => {
                const dbo = db.db("ecommerce")
                dbo.collection(collectionName).insertOne(data, function (error, result) {
                    if (error)
                        return reject(error)
                    resolve(result)
                    db.close()
                })
            })
    })
}

function find(collectionName, filter = {}) {
    return new Promise((resolve, reject) => {
        MongoConnect("mongodb://localhost:27017")
            .then((db) => {
                const dbo = db.db("ecommerce");
                dbo.collection(collectionName).find(filter).toArray(function (error, result) {
                    if (error) return reject(error);
                    resolve(result);
                    db.close();
                });
            })
    })

}

function findOne(collectionName, filter = {}) {
    return new Promise((resolve, reject) => {
        MongoConnect("mongodb://localhost:27017")
            .then((db) => {
                const dbo = db.db("ecommerce");
                dbo.collection(collectionName).findOne(filter, function (error, result) {
                    if (error) return reject(error);
                    resolve(result);
                    db.close();
                });
            })
    })

}

async function update(collectionName, id, date) {
    return new Promise((resolve, reject) => {
        MongoConnect("mongodb://localhost:27017")
            .then((db) => {
                const dbo = db.db("ecommerce");
                dbo.collection(collectionName)
                    .updateOne({_id: ObjectId(id)}, {$set: date}, function (error, result) {
                        if (error) return reject(error);
                        resolve(result);
                        db.close();
                    });
            })
    });
}


async function deleteOne(collectionName, id) {
    return new Promise((resolve, reject) => {
        MongoConnect("mongodb://localhost:27017")
            .then((db) => {
                const dbo = db.db("ecommerce");
                dbo.collection(collectionName)
                    .deleteOne({_id: ObjectId(id)}, function (error, result) {
                        if (error) return reject(error);
                        resolve(result);
                        db.close();
                    });
            })
    });
}

module.exports = {
    MongoConnect,
    insertOne,
    find,
    findOne,
    deleteOne,
    update
}


// function CreateCollection(name) {
//     return new Promise((resolve, reject) => {
//         MongoConnect("mongodb://localhost:27017").then((db) => {
//             const dbo = db.db("ecommerce");
//             dbo.createCollection(name, function (error, result) {
//                 if (error) {
//                     return reject(error)
//                 }
//                 resolve({result, db})
//
//             });
//         })
//     });
// }


