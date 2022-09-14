const {UsersService} = require("../service/UsersService");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');


async function Comper(plain, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plain, hash, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

async function AdminMiddleware(req, res, next) {

    if (req.path == "/auth/register" || req.path == "/auth/login")
        return next();


    let token = req.headers["authorization"]

    let deco = jwt.verify(token, 'shhhhh')

    let us = new UsersService
    let user = await us.findById(deco.id);

    if (!user)
        return res.status(401).json({message: "unauthorized"})
    req.user = user;
    next();
}

module.exports = {
    AdminMiddleware
}
