const User = require('../models/User')

async function createUser(name, email, phone) {
    try {
        await User.create({ name, email, phone });
        console.log('Contact created successfully')
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}


module.exports = { createUser };