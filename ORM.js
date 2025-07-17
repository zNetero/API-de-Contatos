
const { syncDatabase } = require('./sync');
const express = require('express')

const { createUser } = require('./create');
const { listUsers } = require('./read');

const app = express()

app.use(express.json())

app.post('/users', async (request, response) => {
    createUser(
        request.body.name, 
        request.body.email, 
        request.body.phone)
        .then(()=>{
            response.status(200).json({
                message:'Contact created'
            })
        })
        .catch((error)=>{
            response.status(500).json({
                erro: error
            })
        })
})

app.get('/users', async (request,response)=>{
    try{
        const users = await listUsers()
        response.status(200).json(users);
    }
    catch(error){
        response.status(500).json(error)
    }
})


syncDatabase()
    .then(() => {
        app.listen(3000, () => {
            console.log('API ON');
        })
    })