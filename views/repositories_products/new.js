const layout = require('../layout');

module.exports = () => {
  return layout({
    content: `
    <div class="columns is-centered">
    <div class="column is-half">
      <h1 class="subtitle">Create a Product</h1>

      <form method="POST" enctype="multipart/form-data">
        <div class="field">
          <label class="label">Title</label>
          <input class="input" placeholder="Title" name="title">
          <p class="help is-danger"></p>
        </div>
        
        <div class="field">
          <label class="label">Price</label>
          <input class="input" placeholder="Price" name="price">
          <p class="help is-danger"></p>
        </div>
        
        <div class="field">
          <label class="label">Image</label>            
          <input type="file" name="image" />
        </div>
        <br />
        <button class="button is-primary">Create</button>
      </form>
      <a href="/admin/new">Have an new Product to add? </a>
    </div>
  </div>
    `
  });
};