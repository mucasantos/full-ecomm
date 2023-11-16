const express = require("express");
//importar o router do express
const router = express.Router();
//Importei o meu user
const userRepo = require("../repositories/users");
//importei a minha view
const screenSignup = require("../views/signup");
const screenLogin = require("../views/login");

const prodScreen = require('../views/prod-layout')

router.get("/login", (req, res) => {
    res.send(screenLogin());
});

router.post("/login", (req, res) => {

  console.log("Aqui...")

    res.send(prodScreen({}));


    //DEvolver uma tela com produtos fake!
    //Verificar o user!

    //redirecionar para produtos
    //res.redirect("/admin/products")
 });

//router.get('/products', (req,res) => {
//    res.send(prodScreen({}));
//})
//Mostra a view
router.get("/signup", (req, res) => {
  res.send(screenSignup());
});

router.post("/signup", (req, res) => {
  userRepo.create(req.body);

  /*
    SEGUNDA
    Pegar os dados que vem no JSON (email, nome e senha)
    Salvar em um arquivo JSON no server
    1. importar fs
    2. fazer o método create - criar o user
    */
  res.send("Cadastro criado...");
});

/*
Devolver view para o client => signup/login

Fazer um lógica simples de verificação de usuário, IF encontrar,
navego para um HOME.

Autenticação (cookies)
Auth

*/
//exportar o router (o const q acabei de criar)
module.exports = router;
