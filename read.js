const User = require('./User')


async function listUsers(){
    try{
        const read = await User.findAll({})
        return read;
    }
    catch(error){
        console.error(error)
    }
}


module.exports = {listUsers};