const User = require('./models/User')


async function listUsers(){
    try{
        const read = await User.findAll({})
        return read;
    }
    catch(error){
        throw error;
    }
}


module.exports = {listUsers};