//importar o express
const express = require('express')
//Executar as rotas
const router = express.Router()

router.post('/admin/login', (req, res) => {
    res.send("Login do Admin...")
})
router.post('/admin/signup', (req, res) => {
    res.send("Cadastro de usuário...")
})

module.exports = router
