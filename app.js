const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('./public'))

consign()
  .include('/routes')
  .into(app)

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