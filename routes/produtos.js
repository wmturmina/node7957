const Produto = require('../controllers/Produto')
const produto = new Produto()

module.exports = (app) => {
  app.post('/produtos', produto.adicionar)
  app.get('/produtos/form', produto.adicionarForm)
  app.get('/produtos', produto.listar)
  app.get('/produtos/:id', produto.obter)
}