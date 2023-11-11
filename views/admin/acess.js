module.exports = () =>{
    return `
    <!DOCTYPE html>
<html>
<head>
    <title>Autenticação Negada</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
        }
        h1 {
            color: red;
        }
        #back-to-login {
            padding: 10px 20px;
            background-color: #3498db;
            color: #fff;
            text-decoration: none;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Acesso Negado</h1>
    <p>Desculpe, você não tem permissão para acessar esta página.</p>
    <a id="back-to-login" href="/admin/login">Voltar para o Login</a>
</body>
</html>
`
}