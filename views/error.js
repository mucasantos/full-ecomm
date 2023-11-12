module.exports = () => {
    return `
    <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuário não cadastrado</title>
    
    <link rel="stylesheet" href="/style/error.css">
</head>
<body>
    <h1>Usuário não cadastrado</h1>
    <p>Você não está cadastrado em nosso sistema. Por favor, faça o cadastro para continuar.</p>
    <a href="/admin/cadastro">Cadastrar-se</a>
    <hr />
    <a href="/admin/login" class="login-link">Entrar</a>
</body>
</html>
    `
}