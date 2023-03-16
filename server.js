const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const path = require('path')

app.use(express.json())
app.use(morgan('dev'))

app.listen(9000, () => {
  console.log("Server is running on port 9000")
})