const express =require('express')
const app = express()
const bodyParser  = require('body-parser')

const userRepo = require('./repositories/users')
const prodRepo = require('./repositories/products')

//user o body parser em um middleware
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res)=>{

  prodRepo.
    res.send(`
    <div>
    <form method="POST">
        <input name="email" placeholder="email">
        <input name="senha" placeholder="Senha">
        <input name="confirmSenha" placeholder="Confirmar senha">
        <button>Cadastrar</button>
    </form>
</div>`)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Tudo certo...')
})

app.listen(3000, ()=> {
    console.log("Server no ar...")
})