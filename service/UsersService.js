const {User} = require("../DB/User");

const bcrypt = require("bcrypt");

class UsersService {

    async login(username, password) {

        let userModel = new User;
        let userlist = await userModel.find({username: username});


        // check if user found
        if (userlist.length == 0)
            return {status: false, message: "user not found"};

        let user = userlist[0]
        // check password matched (encryption)
        if (!(await this.passwordIsMatched(user.password, password.toString())))
            return {status: false, message: "password is wrong"};
        // user is active
        if (!user.isActive)
            return {status: false, message: "user not active"};


        return {status: true, user};
    }

    async findById(authid) {
        let userModel = new User;
        return userModel.findOne(authid);
    }

    async register(username, password) {
        let userModel = new User;

        let canCount = await this.checkUserName(username)
        if (!canCount)
            return null;


        password = await this.encrypt(password.toString());


        return userModel.insertOne({
            username, password, isActive: true
        });
    }

    async checkUserName(username) {
        let userModel = new User;
        let userList = await userModel.find({username});
        return userList.length > 0 ? false : true;
    }

    encrypt(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) return reject(err);
                resolve(hash);
            })
        });
    }

    async passwordIsMatched(hashed, password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hashed, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
        })
    }
}


module.exports = {
    UsersService
}
