const {UsersService} = require("../service/UsersService");

async function AdminMiddleware(req, res, next) {

    if (req.path == "/auth/register" || req.path == "/auth/login")
        return next();


    let authid = req.headers["authorization"]

    let us = new UsersService
    let user = await us.findById(authid);

    if (!user)
        return res.status(401).json({message: "unauthorized"})
    req.user = user;
    next();
}

module.exports = {
    AdminMiddleware
}
