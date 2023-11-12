const layout = require("../layout");

module.exports = () => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <form method="POST">
              <h1 class="title">Cadastro</h1>
              <div class="field">
                <label class="label">Email</label>
                <input required class="input" placeholder="Email" name="email" />
                <p class="help is-danger"></p>
              </div>
              <div class="field">
                <label class="label">Senha</label>
                <input required class="input" placeholder="Senha" name="password" type="password" />
                <p class="help is-danger"></p>
              </div>
              <div class="field">
                <label class="label">Confirmação de Senha</label>
                <input required class="input" placeholder="Confirmação de Senha" name="passwordConfirmation" type="password" />
                <p class="help is-danger"></p>
              </div>
              <button class="button is-primary">Enviar</button>
            </form>
            <a href="/admin/login">Já possui uma conta? Entre</a>
          </div>
        </div>
      </div>
    `,
  });
};
