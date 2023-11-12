const express = require("express");
const router = express.Router();

const cadastro = require("../../views/admin/signup");
const login = require("../../views/admin/signin");
const cardProduct = require("../../views/admin/products/card");
const prodRepo = require("../../repositories/products");

const userRepo = require("../../repositories/users");
const prodLayout = require("../../views/admin/products/prod-layout"); 

router.get("/cadastro", (req, res) => {
  res.send(cadastro());
});

router.post("/cadastro", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  const user = await userRepo.create({ email: email, password: password });

  res.redirect("/admin/login?success=true");
});

router.get("/login", (req, res) => {
  res.send(login(req, res));
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userRepo.getOneBy({ email, password });

  if (user) {
    req.session.userId = user.id;
    const allProds = await prodRepo.getAll();
    const productCardsHtml = cardProduct({ content: allProds }).join(""); 
    res.send(prodLayout({ productCards: productCardsHtml }));
  } else {
    res.send("Usuário inexistente ou senha incorreta");
  }
});

router.get("/sair", (req, res) => {
  req.session = null;
  res.send("Sessão finalizada...");
});
module.exports = router;
