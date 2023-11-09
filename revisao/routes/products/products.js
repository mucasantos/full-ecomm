//importar o express
const express = require('express')
//Executar as rotas
const router = express.Router()

router.get('/admin/products', (req, res) => {
    res.send("Lista de produtos do Admin...")
})
router.post('/admin/add-product', (req, res) => {
    res.send("Adicionando produtos do Admin...")
})
router.post('/admin/edit-product', (req, res) => {
    res.send("Editando produtos do Admin...")
})
router.post('/admin/delete-product', (req, res) => {
    res.send("Deletando produtos do Admin...")
})

 module.exports = router
