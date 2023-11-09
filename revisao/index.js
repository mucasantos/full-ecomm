//Importar o módulo express
const server = require('express')
//Executar o módulo importado
const app = server()
//Importar  rotas
const authRoutes = require('./routes/auth/auth')
const productsRoutes = require('./routes/products/products')

//Utilizar a rotas
app.use(authRoutes)
app.use(productsRoutes)

//Começar a 'ouvir' as requisições do servidor
app.listen(3000, () => {
    console.log("Server online!")
})