//importar o express
const express = require("express");
//iniciar as Rotas
const router = express.Router(); // Este R tem q ser maiusculo

const cadastro = require("../../views/admin/cadastro");
const login = require("../../views/admin/login");

router.get("/cadastro", (req, res) => {
  res.send(cadastro());
});

router.get("/login", (req, res) => {
  res.send(login());
});

module.exports = router;
