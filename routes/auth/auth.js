//importar o express
const express = require("express");
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

  //Forma de extrair as variáveis no ES6
  const { email, password, confirmPassword} = req.body

  //Antes de criar, temos que verificar se o usuário já existe no DB
  //Se a senha e senha confirmada são iguais, 
  //e se a senha tem um tamanho mínimo... (exercício de validação)

  //Criar o usuário em nosso DB -> levar o create para o userrepo!

  const user = await userRepo.create({email: email, password: password});

  //Guardar o id criado dentro do cookie, para assim, identificar este usuário
  //e ainda, associar este cookie ao user
  // Depois de instalar o package, importar.

  //por causa do cookie, teremos acesso ao session
  //a palavra userId nós que criamos! pode ser qq nome...
  req.session.userId = user.id;

  res.send("TUDO CERTO");
});

router.get("/login", (req, res) => {
  //PAra testar tem que enviar os dados!! Alterar na view e aqui
  res.send(login(req,res));
});
router.post("/login", async(req, res) => {
  const { email, password} = req.body

  //PAra testar tem que enviar os dados!! Alterar na view e aqui
  
  //Antes de atribuir, temos q consultar o BD e ver se esta tudo 
  //correto!!

  const user = await userRepo.getOneBy({email, password})

  if(user) {
    req.session.userId = user.id;

    res.send("sucesso!" + user.id);
  }else {
  res.send("Erro!!!");
  }
  
  
});

router.get("/sair", (req, res) => {
//Logout do usuário
  req.session = null;
  res.send("Sessão finalizada...");
});
module.exports = router;
