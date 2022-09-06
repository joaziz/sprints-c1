function AdminMiddleware(req, res, next) {
    req.user = {
        name: "admin"
    }
    next();
}

module.exports = {
    AdminMiddleware
}
