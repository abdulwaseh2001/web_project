const express = require('express')
const cars = require('cars')
const helmet = require('helmet')
const xss = require('xss-clean')
const cookieParser = require('cookie-parser')

const connectDB = require("./config")
const errorHandler =require("./middleware/errorHandler")
const rateLimiter = require("./middleware/rateLimiter")
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

import adminRoutes from './routes/admin.js';
// …
app.use('/api/admin', adminRoutes);