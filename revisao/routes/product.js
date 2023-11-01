const express = require("express")
//importar o router do express
const router = express.Router()
router.post('/add-product', (req, res) => {
    res.send("produto adicionado...")
})
router.post('/edit-product', (req, res) => {
    res.send("Editei o produto...")
})
router.post('/delete-product', (req, res) => {
    console.log(req.body)
    res.send("Apaguei...")
})
router.get('/products', (req, res) => {
    res.send("Todos os produtos...")
})

//exportar o router (o const q acabei de criar)
module.exports = router