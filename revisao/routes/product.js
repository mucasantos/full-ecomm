const express = require("express");
//importar o router do express
const router = express.Router();
const productRepo = require("../repositories/products");

const myCards = require('../views/card')

router.post("/add-product", (req, res) => {
  res.send("produto adicionado...");
});
router.post("/edit-product", (req, res) => {
  res.send("Editei o produto...");
});
router.post("/delete-product", (req, res) => {
  console.log(req.body);
  res.send("Apaguei...");
});
router.get("/products", async (req, res) => {
  const allprods = await productRepo.getAll();

 //Enviar esta lista(eu sei q eh lista!)

  myCards({content: allprods})



  res.send(myCards({content: allprods}));
});

//exportar o router (o const q acabei de criar)
module.exports = router;

