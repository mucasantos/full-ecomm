const express = require("express")

const router = express.Router()

const userRepo = require('../repositories/user')
const prodRepo = require('../repositories/products')

const screenSignup = require('../views/signup')
const screenLogin = require('../views/login')

router.post('/add-login', (req, res) => {
    //devolver uma tela com produtos feitos
    // verificar user
    res.send("finalizando")
})

router.get('/login', (req, res) => {
    res.send(screenLogin())
})



router.post('/add-signup', (req, res) => {


    userRepo.create(req.body)
    res.send("cadastro criado")
})


router.get('/signup', (req, res) => {
    res.send(screenSignup())
})

router.post('/prod-layout', (req, res) => {


    prodRepo.create(req.body)

    res.send("cadastro criado")
})

module.exports = router