const home = (request, response) => {
  response.end('<h1>HOME NEW</h1>')
}

module.exports = (app) => {
  app.get('/', home)
}