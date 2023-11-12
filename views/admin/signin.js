const layout = require("../layout");

module.exports = (req, res) => {
  const successMessage = req.query.success
    ? "Cadastro realizado com sucesso!"
    : "";

  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
          <form method="POST">
          <h1 class="title">Entrar</h1>
              
              <div class="field">
                <label class="label">Email</label>
                <input required class="input" placeholder="Email" name="email" />
              </div>
              <div class="field">
                <label class="label">Senha</label>
                <input required class="input" placeholder="Senha" name="password" type="password" />
              </div>
              <button class="button is-primary" type="submit">Enviar</button>
            </form>
            <a href="/admin/cadastro">Precisa de uma conta? Cadastre-se</a>
          </div>
        </div>
      </div>

      <div id="popupMessage" class="popup-message" ${
        successMessage ? 'style="display: block; background-color: green;"' : ""
      }>
      <p>${successMessage || "Usuário inexistente ou senha incorreta"}</p>
    </div>

    <style>
      .popup-message {
        display: none;
        position: fixed;
        top: 80px;
        right: 20px;
        color: white;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
        animation: fadeOut 2s 3s forwards;
      }

      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    </style>

    <script>
      document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch('/admin/login', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            const popup = document.getElementById('popupMessage');
            popup.textContent = data.error;
            popup.style.display = 'block';
            setTimeout(() => {
              popup.style.display = 'none';
            }, 3500);
          } else {
            window.location.href = '/admin';
          }
        });
      });

      if ("${successMessage}") {
        setTimeout(() => {
          document.getElementById('popupMessage').style.display = 'none';
        }, 3500);
      }
    </script>
  </div>
`,
  });
};
