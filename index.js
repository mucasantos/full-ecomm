<<<<<<< HEAD
const app = require("express")
=======
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session')
>>>>>>> resolve

const server = app()

<<<<<<< HEAD
const bodyParser = require("body-parser")

const cookieSession = require("cookie-session")
=======
const validSession = require('./controller/verify_session')

//user o body parser em um middleware
app.use(bodyParser.urlencoded({ extended: true }));
//middleware para expor uma pasta pública, como CSS
app.use(express.static("public"));
//Este middleware usa config abaixo keys,   que são letras e numeros
//randomicos que o programador deve digitar, para geração do cookie
//e criptografar a informação
app.use(cookieSession({
  keys: ['septidfljkhsdlkgjdhsgkljsdhlgs69859680']
}))
//Apos o middle acima, cada requisição adicionará uma propriedade 
//adicional, chamada de session.

//nosso filtro q informa q toda req tem q ser /admin
app.use("/admin", authRoutes);
app.use("/admin", validSession, productsRoutes);
>>>>>>> resolve

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