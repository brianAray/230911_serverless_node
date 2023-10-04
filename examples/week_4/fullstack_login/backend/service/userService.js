const userDao = require('../repository/userDao');

async function validateLogin(username, password){
    // calls the dao to check login
    const userData = await userDao.retrieveByUsername(username);
    if(userData.Item.password === password){
        const role = userData.Item.role;
        return {username, role};
    }else{
        return null;
    }
}

module.exports = {
    validateLogin
}