const User = require('../models/User');

async function getUserById(id){
    try{
        const user = await User.findByPk(id);
    return user
    }
    catch(error){
        throw error;
    }
}

module.exports = {getUserById}