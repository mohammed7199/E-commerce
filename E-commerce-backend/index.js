require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { checkSchema } = require('express-validator')
const configureDB  =require('./config/db')
const  usersCltr = require('./App/controllers/users-cltr')
const userValidationSchema = require('./App/helpers/user-validation')
const port = 3100
const app = express()
app.use(express.json())
app.use(cors())

configureDB()

app.post('/api/user/register', checkSchema(userValidationSchema) ,usersCltr.register )

app.listen(port,() => {
    console.log('server running on port',port)
})