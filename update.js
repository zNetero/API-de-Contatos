const User = require('./User');

async function updateUser(name,email,phone){
    try{
        await User.update();
        return newUser
    }
    catch(error){
        throw error;
    }
}

module.exports = {updateUser}