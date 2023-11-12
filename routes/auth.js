
const express = require("express");
const router = express.Router();

const cadastro = require("../views/admin/signup");
const login = require("../views/admin/signin");
const error = require("../views/error");
const userRepo = require("../repositories/users");

router.get("/cadastro", (req, res) => {
  res.send(cadastro());
});

router.post("/cadastro", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  const user = await userRepo.create({ email: email, password: password });

  
  res.redirect('login');
});

router.get("/login", (req, res) => {
  res.send(login(req, res));
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userRepo.getOneBy({ email, password });

  if (user) {

    req.session.userId = user.id
    res.redirect('/admin/products')
  } else {
    res.send(error())
  }

});

router.get("/sair", (req, res) => {
  req.session = null;
  res.send("Sessão finalizada...");
});

module.exports = router;