//MVC ==> Padrão de projeto
//A premissa de divisão de responsabilidades

//Classe
//Repositório
//Serviço => conectar a BD (exemplo)

/*
1. Criar um servidor (express) - npm init
2. Criar os endpoints (rotas)
3. Router => organizar as nossas rotas (separar as responsabilidades)
4. Controllers => DB
*/

const app = require("express");
const server = app();
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

//Pegamos os dados de um form HTML
server.use(bodyParser.urlencoded({ extended: true }));
//Pegamos os dados que vem como JSON
server.use(bodyParser.json());

server.use("/admin", authRoutes);
server.use("/admin", productRoutes);

server.listen(3001, () => {
  console.log("Servidor no ar...");
});
