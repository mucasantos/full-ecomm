//importar o express
const express = require("express");
const multer = require("multer");
//iniciar as Rotas
const router = express.Router(); // Este R tem q ser maiusculo
const upload = multer({ storage: multer.memoryStorage() });

//importa o repositorio de produtos
const prodRepo = require("../../repositories/products");
const newProduct = require("../../views/admin/products/new");

router.post("/products/new", (req, res) => {
  res.send(newProduct());
});


router.post("/products/new", upload.single("image"), async (req, res) => {
  console.log(req.body);
  await prodRepo.create(req.body);
  res.send("Produto criado...");
});

router.get("/products", (req, res) => {
  console.log(req.session.userId)

  res.send("Aqui mostraremos todos os produtos..." + req.session.userId );
});

router.get('/bla',(req, res)=> {
  res.send("OK")
})
module.exports = router;
