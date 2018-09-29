const livros = [
  'React',
  'Node',
  'Native',
  'Scrum'
]

const produtos = (request, response) => {
  response.render('produtos/lista.ejs', {
    livros: livros
  })
}

module.exports = (app) => {
  app.get('/produtos', produtos)
}