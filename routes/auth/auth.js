// Importar o express e o módulo crypto
const express = require("express");
const crypto = require("crypto");

const router = express.Router();

// Importar as views de cadastro e login
const cadastro = require("../../views/admin/signup");
const login = require("../../views/admin/signin");

// Importar o repositório de usuários
const userRepo = require("../../repositories/users");

// Rota para exibir o formulário de cadastro
router.get("/cadastro", (req, res) => {
  res.send(cadastro());
});

// Rota para processar o formulário de cadastro
router.post("/cadastro", async (req, res) => {


  const userPassword = req.body.password; //  obter a senha do usuário corretamente
  const hash = crypto.createHash('sha256').update(userPassword).digest('hex');
  
  // Armazenar o hash da senha na sessão
  req.session.passwordHash = hash;

  // Escrever os dados da sessão no repositório
  await userRepo.writeAll(req.session);

  res.send("Cadastro realizado com sucesso!");
});

// Rota para exibir o formulário de login
router.get("/login", (req, res) => {
  res.send(login());
});

module.exports = router;


