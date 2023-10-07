const express = require('express')
const router = express.Router()
const upload = multer({storage: multer.memoryStorage()})

const newProducts = require('../../views/products/newProducts')
const products = require('../../views/products/products')

const productsRepo = require('../../repositories/products')
const multer = require('multer')

router.get("/cadastro", (req, res) => {
  res.send(newProducts());
});

router.post("/cadastro",upload.single('image'), async (req, res) => {
  await productsRepo.create(req.body);
  console.log(req.body)
  res.send("Produto cadastrado!");
}); 
  

router.get("/products", (req, res)=>{
res.send(products())
})
module.exports = router;
