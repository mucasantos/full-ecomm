//importar o express
const express = require("express");
//iniciar as Rotas
const router = express.Router(); // Este R tem q ser maiusculo

const product = require("../views/products/product");
const login = require("../views/admin/signin");

//importa o repositorio de usuário
const userRepo = require("../repositories/products");

router.get("/product", (req, res) => {
  res.send(product());
});

router.post("/product", async (req, res) => {
  await userRepo.create(req.body);
  res.send("TUDO CERTO");
});
router.get("/login", (req, res) => {

  res.send(login());

});

module.exports = router;
