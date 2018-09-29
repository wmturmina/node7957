const express = require('express')
const _ = require('lodash')

const port = 8443
const livros = [
  'React',
  'Node',
  'Native',
  'Scrum'
]

const app = express()

const home = (request, response) => {
  response.end('<h1>HOME NEW</h1>')
}
const produtos = (request, response) => {
  response.render('produtos/lista.ejs', {
    livros: livros
  })
}

app.get('/', home)
app.get('/produtos', produtos)

app.listen(port, () => {
  console.log(`
        Servidor subiu na porta ${port}
        Pressione CTRL+C para derrubar
        http://localhost:${port}
    `)
})