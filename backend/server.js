const express = require('express')
const cars = require('cars')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000
//middleware

app.use(cars())
app.use(express.json())
//routes

app.use('/api/test', require('./routes/test'))

app.listen(PORT,() =>{
    console.log(`server is running on port, ${PORT}`)


});