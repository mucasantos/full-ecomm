//Padrao MVC (Model View Controller)

const layout = require("../layout");

module.exports = () => {
  return layout({
    content: `
        <div>
        <form method="POST">
            <input name="email" placeholder="email">
            <input name="senha" placeholder="Senha">
            <button>Login</button>
        </form>
    </div>`,
  });
};
