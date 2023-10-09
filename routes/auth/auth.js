
const express = require("express");
const crypto = require("crypto");
const router = express.Router();
const cadastro = require("../../views/admin/signup");
const login = require("../../views/admin/signin");
const userRepo = require("../../repositories/users");


router.get("/cadastro", (req, res) => {
  res.send(cadastro());
});

// Rota para processar o formulário de cadastro
router.post("/cadastro", async (req, res) => {

  const email = req.body.email
  const userPassword = req.body.password; //  obter a senha do usuário corretamente
  const hashPassword = crypto.createHash('sha256').update(userPassword).digest('hex');

if(req.body.password != req.body.passwordConfirmation){
  res.send("Senhas diferentes!")
} else{
  req.session.passwordHash = hashPassword;
  const user = {
    email,
    hashPassword
  }
  
  await userRepo.writeAll(user);
  
  res.send("Cadastro realizado com sucesso!");

}

});


router.get("/login", (req, res) => {
  res.send(login());
});

router.post("/login", async (req, res) => {
  const email = req.body.email
  const userPassword = req.body.password
  const hashPassword = crypto.createHash('sha256').update(userPassword).digest('hex');

  const confirmation = await userRepo.getAll()

  if(confirmation.email === email && confirmation.hashPassword === hashPassword){
    res.json({ message: 'Login realizado!', confirmation });
  } else{
    return res.status(401).json({ message: 'Usuário não encontrado.' });
  }

})
module.exports = router;


