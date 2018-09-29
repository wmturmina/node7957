const home = (request, response) => {
  response.render('home.ejs')
}

module.exports = (app) => {
  app.get('/', home)
}