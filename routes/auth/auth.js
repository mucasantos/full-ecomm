//importar o express
const express = require("express");
const crypto = require("crypto")
//iniciar as Rotas
const router = express.Router(); // Este R tem q ser maiusculo

const cadastro = require("../../views/admin/signup");
const login = require("../../views/admin/signin");

//importa o repositorio de usuário
const userRepo = require("../../repositories/users");

router.get("/cadastro", (req, res) => {
  res.send(cadastro());
});

router.post("/cadastro", async (req, res) => {
  // Adiciona um numero ramdom na sessão
  const senhaDoUsuario = 'senha123';
  const hash = crypto.createHash('sha256').update(senhaDoUsuario).digest('hex');
  req.session.hashDaSenha = hash;
  await userRepo.writeAll(req.session)
  res.send("TUDO CERTO");
});


router.get("/login", (req, res) => {
  res.send(login());
});

module.exports = router;
