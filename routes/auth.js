const express = require("express")

const router = express.Router()

const userRepo = require('../repositories/user')
const prodRepo = require('../repositories/products')

const screenSignup = require('../views/signup')
const screenLogin = require('../views/login')

router.get('/login', (req, res) => {
    res.send(screenLogin())
})

router.post('/login', async (req, res) => {
    const user = await userRepo.getOneBy({ email, password })

    if (user) {
        req.session.userId = user.userId
        res.send("Usuario encontrado")
    }else{
        res.send("Usario nao encontrado")
    }

})


router.get('/signup', (req, res) => {
    res.send(screenSignup())
})

router.get("/sair",(req,res)=>{
    req.session = nullres.send("Sessao finalizada...")
})

module.exports = router