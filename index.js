const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session')

const authRoutes = require("./routes/auth/auth");
const productsRoutes = require("./routes/auth/products");

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

app.listen(3000, () => {
  console.log("Server no ar...");
});
