const Mongo = require("mongodb")
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


module.exports = {
    MongoConnect,
    insertOne,
    find,
    findOne
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


