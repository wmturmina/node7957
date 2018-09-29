const express = require('express')
const app = express()

require('./routes/home')(app)
require('./routes/produtos')(app)

module.exports = app