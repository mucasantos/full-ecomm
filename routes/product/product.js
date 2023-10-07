const express = require("express");
const multer = require("multer")
const router = express.Router();
const upload = multer({storage:multer.memoryStorage()})

const produto = require("../../views/admin/produto");
const newProduto = require("../../views/admin/newProduto");

const productRepo = require("../../repositories/products");

router.get("/products", (req, res) => {

})

router.get("/products/new", (req, res) => {
    res.send(newProduto());
})

router.post("/products/new", upload.single('image'), async(req, res) => {
    await productRepo.create(req.body)
    res.send("TUDO CERTO");
})

module.exports = router;