//importar o express
const express = require("express");
//iniciar as Rotas
const router = express.Router(); // Este R tem q ser maiusculo

router.get('/cadastro', (req,res)=>{
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

router.get('/login', (req,res)=>{

    res.send(`
    <div>
    <form method="POST">
        <input name="email" placeholder="email">
        <input name="senha" placeholder="Senha">
        <button>Login</button>
    </form>
</div>`)
})

module.exports = router;