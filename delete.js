const User = require('./User');

async function deleteUser(id) {
    try {
        const deletedRowsCount = await User.destroy({ where: { id } })
        if (deletedRowsCount === 0) {
            throw new Error('User could not be deleted')
        }
        return { message: 'User deleted sucessfully' }
    }
    catch (error) {
        throw error
    }
}

module.exports = { deleteUser }