
const { syncDatabase } = require('./sync');
const express = require('express')
const { updateUser } = require('./update');
const { createUser } = require('./create');
const { listUsers } = require('./read');
const { deleteUser } = require('./delete');
const { getUserById } = require('./getUserById');

const app = express()

app.use(express.json())

app.post('/user', async (request, response) => {
    createUser(
        request.body.name,
        request.body.email,
        request.body.phone)
        .then(() => {
            response.status(200).json({
                message: 'Contact created'
            })
        })
        .catch((error) => {
            response.status(500).json({
                erro: error
            })
        })
})


app.patch('/update/:id', async (request, response) => {
    const id = request.params.id;
    const updatedData = request.body

    try {
        const result = await updateUser(id, updatedData);
        response.status(200).json(result)
    }
    catch (error) {
        response.status(500).json({ error: error.message })
    }
})


app.delete('/delete/:id', async (request, response) => {
    const id = request.params.id;
    try {
        const result = await deleteUser(id)
        response.status(200).json(result)
    }
    catch (error) {
        response.status(500).json({
            error: error.message
        })
    }
})


app.get('/user/:id', async (request, response) => {
    const { id } = request.params;
    try {
        const user = await getUserById(id)
        if (!user) {
            return response.status(404).json({
                message: 'Contact not found'
            })
        }
        response.status(200).json(user);
    }
    catch (error) {
        response.status(500).json({
            error: error.message
        })
    }
})



app.get('/user', async (request, response) => {
    try {
        const users = await listUsers()
        response.status(200).json(users);
    }
    catch (error) {
        response.status(500).json(error)
    }
})


syncDatabase()
    .then(() => {
        app.listen(3000, () => {
            console.log('API ON');
        })
    })