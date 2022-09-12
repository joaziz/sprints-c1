const {UsersService} = require("../service/UsersService");

class AuthControllers {

    async login(req, res) {

        const {username, password} = req.body;

        let userService = new UsersService;
        let user = await userService.login(username, password)

        res.json({
            user
        });
    }

    async register(req, res) {

        const {username, password} = req.body;

        let userService = new UsersService;
        let user = await userService.register(username, password)

        res.json({
            user
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
