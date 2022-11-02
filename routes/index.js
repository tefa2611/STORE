const productRouter = require ('./products.router')
const categorieRouter = require ('./categories.router')
const colourRouter = require ('./colours.router')
const typeRouter = require ('./types.router')

function routerApi(app){
  app.use('/products', productRouter)
  app.use('/categories', categorieRouter)
  app.use('/colours', colourRouter)
  app.use('/types', typeRouter)
}

module.exports = routerApi
