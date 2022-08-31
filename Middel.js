async function auth() {
    return true
}

function checkAuthentication() {
    return async function (req, res, next) {
        let isUserAuthenticated = await auth();

        if (!isUserAuthenticated)
            return res.json({message: "user not authenticated"});


        console.log('anther middleware')
        next();
    }
}

function LogAllRequests() {
    return function (req, res, next) {
        console.log('new request happen')
        next();
    }
}


module.exports = {
    LogAllRequests,
    checkAuthentication
}
