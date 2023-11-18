const layout = require('../layout');

//Agora recebo os parametros e tenho q mudar na router tb!!
module.exports = (req,res) => {
  return layout({
    req,
    content: `

      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <form method="POST">
              <h1 class="title">Sign in</h1>
              O seu id é: ${req.session.userId}

              <div class="field">
                <label class="label">Email</label>
                <input required class="input" placeholder="Email" name="email" />
                <p class="help is-danger"></p>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input required class="input" placeholder="Password" name="password" type="password" />
                <p class="help is-danger"></p>
              </div>
              <button class="button is-primary">Submit</button>
            </form>
            <a href="/admin/cadastro">Need an account? Sign Up</a>
          </div>
        </div>
      </div>
    `
  });
};
