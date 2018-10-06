const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))

require('./routes/home')(app)
require('./routes/produtos')(app)

module.exports = app