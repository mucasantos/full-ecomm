//importar o express
const express = require("express");
//iniciar as Rotas
const router = express.Router(); // Este R tem q ser maiusculo

const productRepo = require("../../repositories/products");
const userProdsView = require("../../views/users/index");

router.get("/", async (req, res) => {
  const products = await productRepo.getAll();

  res.send(userProdsView({ req, products }));
});

router.get("/cadastro", (req, res) => {
  res.send("Mostrar os produtos");
});

router.post("/cadastro", async (req, res) => {
  res.send("TUDO CERTO");
});
router.get("/select/product/:id", async (req, res) => {
const id = req.params.id

//Enviar para o método responsável em fazer algo(deletar, add fav, add cart...)
  res.send(id);
});

module.exports = router;
