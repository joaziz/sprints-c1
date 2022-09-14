const {User} = require("../DB/User");
const jwt = require('jsonwebtoken');
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

/// user is ok


        let token = jwt.sign({username: user.username, id: user._id}, 'shhhhh');

        return {status: true, token};
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

    async makeAToken(user) {

        let header = {"alg": "HS256", "typ": "JWT"};
        let payload = {username: user.username, id: user._id};
        let sing = {};


        let partOneAndTwo = Buffer.from(JSON.stringify(header)).toString("base64") + "." + Buffer.from(JSON.stringify(payload)).toString("base64");

        let hash = await this.encrypt(partOneAndTwo)

        let token = partOneAndTwo + "." + Buffer.from(hash).toString("base64")

        return token
    }
}


module.exports = {
    UsersService
}
