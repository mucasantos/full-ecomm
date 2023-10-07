const express = require("express")
const router = express.Router()
const cadastro = require("../../views/products/products")
const productRepo = require("../../repositories/products")

router.get("/cadastro", (req, res) => {
    res.send(cadastro())
})

router.post("/cadastro", async (req, res) => {
    await productRepo.create(req.body)
    res.send("Deu Bom !!!")
})

module.exports = router
