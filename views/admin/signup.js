const layout = require('../layout');

module.exports = ({ errors }) => {

  const getError = (error, prop) => {
    //prop === 'email' || 'password' || 'confirmPass'
    if (error) {
      try {
        return error.mapped()[prop].msg

      } catch (e) {
        console.log(e)
        return ''
      }
      //erros.mapped() nos retorna o objeto do erro, e 
      //desse objeto, pegamos o 'msg'
    }else {
      return ''
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
<span class="error">                ${getError(errors, 'email')}
</span>
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
