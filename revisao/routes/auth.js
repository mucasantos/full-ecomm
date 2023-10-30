const express = require("express")
//importar o router do express
const router = express.Router()

router.post('/login', (req, res) => {
    res.send("Login com sucesso...")
})
router.post('/signup', (req, res) => {

    console.log(req.body)

    /*
    SEGUNDA
    Pegar os dados que vem no JSON (email, nome e senha)
    Salvar em um arquivo JSON no server
    1. importar fs
    2. fazer o método create - criar o user
    */
    res.send("Cadastro criado...")
})

//exportar o router (o const q acabei de criar)
module.exports = router