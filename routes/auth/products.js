//importar o express
const express = require("express");
const multer = require("multer");
//iniciar as Rotas
const router = express.Router(); // Este R tem q ser maiusculo
//Configurar o multer
const upload = multer({ storage: multer.memoryStorage() });

//importa o repositorio de produtos
const prodRepo = require("../../repositories/products");
const newProduct = require("../../views/admin/products/new");
const productRepo = require("../../repositories/products");

const adminProducts = require("../../views/admin/products/index");

router.get("/product/new", (req, res) => {
  res.send(newProduct());
});

router.post("/product/new", upload.single("image"), async (req, res) => {
  const data = req.body;

  await prodRepo.create({ data: data, image: req.file.buffer.toString('base64') });
  res.send("Produto criado...");
});

router.get("/products", async (req, res) => {
  const allprods = await productRepo.getAll();
  //Enviar esta lista(eu sei q eh lista!)

  res.send(adminProducts({ content: allprods, req }));
});

module.exports = router;
