const express = require("express");
const multer = require("multer")
const router = express.Router();
const upload = multer({storage:multer.memoryStorage()})
const produto = require("../../views/admin/prod-layout");
const newProduto = require("../../views/admin/newProduto");
const produtoJson = require("../../repositories/products");
const myCards = require("../../views/admin/card")


router.get("/products", async (req, res) => {
    const allprods = await produtoJson.getAll();

    res.send(myCards({content: allprods}))
})

router.get("/products/new", (req, res) => {
    res.send(newProduto());
})

router.post("/products/new", upload.single('image'), async(req, res) => {
    await productRepo.create(req.body)
    res.send("TUDO CERTO");
})

module.exports = router;