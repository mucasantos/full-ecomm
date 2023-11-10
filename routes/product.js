const express = require("express")

const prodRepo = require("../repositories/products")

const myCards = require("../views/card")

const router = express.Router()


router.post('/add-product', (req, res) => {
    res.send("finalizando")
})

router.post('edit-product', (req, res) => {
    res.send("Todos os produtos")
})

router.post('/delete-products', (req, res) => {
    res.send("finalizando")
})

router.get('/product', async (req, res) => {
    const allProds = await prodRepo.getAll()
    myCards({content: allProds})

    res.send(myCards({content: allProds}))
})



module.exports = router