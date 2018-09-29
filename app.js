const express = require('express')
const app = express()

const rotaDaHome = require('./routes/home')
const rotaDosProdutos = require('./routes/produtos')
rotaDaHome(app)
rotaDosProdutos(app)

module.exports = app