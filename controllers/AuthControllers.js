class AuthControllers {

    login(req, res) {
        res.json({
            message: "user login"
        });
    }

    forgetPassword(req, res) {
        res.json({
            message: "forgetpassword"
        });
    }

    resetPassword(req, res) {
        res.json({
            message: "reset password"
        });
    }

}


module.exports = {
    AuthControllers
}
