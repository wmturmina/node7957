const home = (request, response) => {
  response.send('Rota da home do sistema')
}

module.exports = (app) => {
  app.get('/', home)
}