const app = require("express")

const server = app()

const bodyParser = require("body-parser")

const authRoutes = require("./routes/auth")

const productsRoutes = require("./routes/product")

//pegamos os dados de um formulario HTML
server.use(bodyParser.urlencoded({ extended: true }))
//pegamos os dados que vem como json
server.use(bodyParser.json())

server.use(app.static("public"))

server.use('/admin', authRoutes)

server.use('/admin', productsRoutes)

server.listen(3001, () => {
    console.log("servidor no ar ...")
})