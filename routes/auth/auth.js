const express = require("express");
const bcrypt = require('bcryptjs');
const router = express.Router();
const cadastro = require("../../views/admin/signup");
const login = require("../../views/admin/signin");

const userRepo = require("../../repositories/users")



router.get("/cadastro", (req, res) => {
  res.send(cadastro());
});

router.post("/cadastro", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;


  if (password === passwordConfirmation) {

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      email,
      password: hashedPassword,
    };


    await userRepo.create(user)


    res.send("TUDO CERTO");
  }

});

router.get("/login", (req, res) => {
  res.send(login());
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;


  const records = await userRepo.this.getAll();

  records.find((record) => record.email === email);


  if (!user) {
    return res.status(401).json({ message: 'Usuário não encontrado.' });
  }

  const senhaValida = await bcrypt.compare(password, user.password);

  if (senhaValida) {

    res.json({ message: 'Logado!', user: user });
  } else {

    res.status(401).json({ message: 'Sem acesso ' });
  }
});


module.exports = router;
