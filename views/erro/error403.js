const layout = require("./layoutError")

module.exports = (req, res) => {
    return layout({
        content: `
        <div class="scene">
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <span class="bg-403">403</span>
        <div class="text">
          <span class="hero-text"></span>
          <span class="msg">can't let <span>you</span> in.</span>
          <span class="support">
            <span>unexpected?</span>
            <div style="display: flex; flex-direction: column; gap: 20px;">
            <a href="/admin/login">Singin Again</a>
            <a href="/admin/cadastro">Need a account?</a>
            </div>
          </span>
        </div>
        <div class="lock"></div>
      </div>
        `
    })
}