//importar o express
const express = require("express");
//iniciar as Rotas
const router = express.Router(); // Este R tem q ser maiusculo

const productRepo = require("../../repositories/products");
const userProdsView = require("../../views/users/index");

router.get("/", async (req, res) => {
  const products = await productRepo.getAll();

  res.send(userProdsView({ products }));
});

router.get("/cadastro", (req, res) => {
  res.send("Mostrar os produtos");
});

router.post("/cadastro", async (req, res) => {
  res.send("TUDO CERTO");
});

module.exports = router;
