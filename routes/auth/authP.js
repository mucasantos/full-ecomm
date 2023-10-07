
const express = require("express");
//iniciar as Rotas
const router1 = express.Router(); // Este R tem q ser maiusculo


const newProduct = require("../../views/repositories_products/new")

const userRepo = require("../../repositories/products");

router1.get("/new", (req, res) => {
    res.send(newProduct());
  });
  
  router1.post("/new", async (req, res) => {
    await userRepo.create(req.body);
    res.send("TUDO CERTO-PARA PRODUTOS");
  });
  module.exports = router1;
  
  
  