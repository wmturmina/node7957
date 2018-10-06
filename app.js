const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('./public'))

require('./routes/home')(app)
require('./routes/produtos')(app)

// 404
app.use((request, response) => {
    response.status(404)
    response.send('Página não encontrada')
})


// 404
app.use((error, request, response, next) => {
    response.status(500)
    response.send('Erro desconhecido')
})

module.exports = app