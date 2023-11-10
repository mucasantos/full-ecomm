const app = require("express")

const server = app()

const bodyParser = require("body-parser")

const cookieSession = require("cookie-session")

const authRoutes = require("./routes/auth")

const productsRoutes = require("./routes/product")

const validSession = require("./controller/verify_session")

//pegamos os dados de um formulario HTML
server.use(bodyParser.urlencoded({ extended: true }))
//pegamos os dados que vem como json
server.use(bodyParser.json())

server.use(app.static("public"))

server.use(cookieSession({
    keys: ['gfjdslkj543648gjdkh565'] // devemos na key, inserir caracteres aleatórios 
}))

server.use('/admin', authRoutes)

server.use('/admin', validSession, productsRoutes)

server.listen(3001, () => {
    console.log("servidor no ar ...")
})