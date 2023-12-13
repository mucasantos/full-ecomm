const layout = require('../layout');

module.exports = ({ errors }) => {

  const getError = (errors, prop) => {
    //prop === 'email' || 'password' || 'confirmPass'

    if (errors) {
      try {
        return errors.mapped()[prop].msg

      } catch (error) {
        return ''
      }
      //erros.mapped() nos retorna o objeto do erro, e 
      //desse objeto, pegamos o 'msg'
    }
  }
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <form method="POST">
              <h1 class="title">Sign Up</h1>
              <div class="field">
                <label class="label">Email</label>
                <input required class="input" placeholder="Email" name="email" />
                <p class="help is-danger"></p>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input required class="input" placeholder="Password" name="password" type="password" />
                ${getError(errors, 'email')}
                <p class="help is-danger"></p>
              </div>
              <div class="field">
                <label class="label">Password Confirmation</label>
                <input required class="input" placeholder="Password Confirmation" name="passwordConfirmation" type="password" />
                <p class="help is-danger"></p>
              </div>
              <button class="button is-primary">Submit</button>
            </form>
            <a href="/admin/login">Have an account? Sign In</a>
          </div>
        </div>
      </div>
    `
  });
};
