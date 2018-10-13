const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const cors = require('cors')

const app = express()

app.use(cors())
/*
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Methods', 'GET, HEAD, PUT, POST, PATCH, DELETE')
  response.header('Access-Control-Allow-Headers', 'content-type')
  next()
})
*/
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