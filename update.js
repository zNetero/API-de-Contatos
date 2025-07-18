const User = require('./User');

async function updateUser(id, updatedData){
    try{
        const [updatedRowsCount] = User.update(updatedData,{where:{id}})
        if(updatedRowsCount === 0){
            throw new Error('User not found or no changes made');
        }
        return { message: 'User updated successfully.' }
    }
    catch(error){
        throw error;
    }
}

module.exports = {updateUser}