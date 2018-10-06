const connectionFactory = require('../infra/connectionFactory')
const connection = connectionFactory()
const ProdutosDAO = require('../infra/ProdutosDAO')
const produtosDAO = new ProdutosDAO(connection)
const Joi = require('joi')

const produtoSchema = Joi.object().keys({
  titulo: Joi.string().required(),
  preco: Joi.number().required(),
  descricao: Joi.string().required()
})

class Produto {
  listar(request, response) {
    produtosDAO
      .pegaTodos()
      .then((result) => {
        const livros = result
        response.format({
          html: () => {
            response.render('produtos/lista.ejs', {
              livros: livros
            })
          },
          json: () => {
            response.send(livros)
          }
        })
      })
  }
  
  obter(request, response) {
    const id = request.params.id
    produtosDAO
      .pegaUmPorId(id)
      .then((result) => {
        response.send(result)
      })
  }
  
  adicionarForm(request, response) {
    response.render('produtos/form.ejs')
  }
  
  adicionar(request, response, next) {
    const {
      titulo,
      preco,
      descricao
    } = request.body
    const produto = {
      titulo: titulo,
      preco: preco,
      descricao: descricao
    }
    const result = Joi.validate(produto, produtoSchema, {
      abortEarly: false
    })
    if (result.error) {
      response.format({
        html: () => {
          response.render('produtos/form.ejs', {
            errors: result.error.details
          })
        },
        json: () => {
          response.status(400)
          response.send(result.error.details)
        }
      })
      return
    }
    produtosDAO
      .adicionar(produto)
      .then(() => {
        response.redirect('/produtos')
      })
      .catch((erro) => {
        next(erro)
      })
  }
}

module.exports = Produto