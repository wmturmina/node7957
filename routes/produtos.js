const connectionFactory = require('../infra/connectionFactory')
const connection = connectionFactory()
const ProdutosDAO = require('../infra/ProdutosDAO')
const produtosDAO = new ProdutosDAO(connection)

const produtos = (request, response) => {
  produtosDAO
    .pegaTodos()
    .then((result) => {
      console.log('4 - Dentro de produtos.js')
      const livros = result
      response.render('produtos/lista.ejs', {
        livros: livros
      })
    })
}

const produto = (request, response) => {
  const id = request.params.id
  produtosDAO
    .pegaUmPorId(id)
    .then((result) => {
      response.send(result)
    })
}

const produtoForm = (request, response) => {
  response.render('produtos/form.ejs')
}

const produtoPost = (request, response) => {
  response.send(request.body)
}

module.exports = (app) => {
  app.post('/produtos', produtoPost)
  app.get('/produtos/form', produtoForm)
  app.get('/produtos', produtos)
  app.get('/produtos/:id', produto)
}