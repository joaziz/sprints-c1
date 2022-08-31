const fs = require("fs").promises

const FileNme = "users.json";


async function UpdateUser(id, name, age) {
    let allUsers = await readUserList();
    let user = allUsers.filter(user => user.id == id)[0];
    user.name = name;
    user.age = age;

    await fs.writeFile(FileNme, JSON.stringify(allUsers))
}

async function getUserById(id) {


    let filterdUsers = (await readUserList()).filter((item) => item.id === id);

    if (filterdUsers.length > 0)
        return filterdUsers[0];

    return {};

}

async function readUserList() {
    let oldData = await fs.readFile(FileNme);
    if (oldData === "" || oldData === undefined)
        oldData = "[]";
    return JSON.parse(oldData);
}


async function WriteUserData(name, age) {
    let oldDataObj = await readUserList()
    let id = oldDataObj.length + 1
    oldDataObj.push({id, name, age})
    await fs.writeFile(FileNme, JSON.stringify(oldDataObj))
}


module.exports = {
    WriteUserData,
    readUserList,
    getUserById,
    UpdateUser
}
