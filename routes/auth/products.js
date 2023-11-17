//importar o express
const express = require("express");
const multer = require("multer");
//iniciar as Rotas
const router = express.Router(); // Este R tem q ser maiusculo
const upload = multer({ storage: multer.memoryStorage() });

//importa o repositorio de produtos
const prodRepo = require("../../repositories/products");
const newProduct = require("../../views/admin/products/new");
const productRepo = require("../../repositories/products");
const myCards = require('../../views/admin/products/card-product')



router.get("/product/new", (req, res) => {
  res.send(newProduct());
});

router.post("/product/new", upload.single("image"), async (req, res) => {
  console.log(req.body);
  await prodRepo.create(req.body);
  res.send("Produto criado...");
});

router.get("/products", async (req, res) => {
  const allprods = await productRepo.getAll();
  //Enviar esta lista(eu sei q eh lista!)
  myCards({ content: allprods });
  res.send(myCards({ content: allprods }));
});

module.exports = router;
