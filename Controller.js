const {WriteUserData, readUserList, getUserById, UpdateUser} = require("./DB");

const saveUserController = async (req, res) => {
    let {name, age} = req.query;
    await WriteUserData(name, age);
    res.json({name});
}

const ListUsersController = async (req, res) => {
    let oldDataObj = await readUserList();
    res.json(oldDataObj);
}

const ViewUserController = async (req, res) => {
    let {id} = req.params;
    let user = await getUserById(parseInt(id));
    res.json({user})
}

const UpdateUserController = async (req, res) => {
    let {id} = req.params;
    let {name, age} = req.query;
    let user = await getUserById(parseInt(id));
    if (!user.id)
        return res.json({message: "user not found"});

    await UpdateUser(parseInt(user.id), name, age)
    return res.json({user: await getUserById(parseInt(id))});

}

const DeleteUserController = (req, res) => {
}

module.exports = {
    saveUserController,
    ListUsersController, ViewUserController, UpdateUserController, DeleteUserController
}
