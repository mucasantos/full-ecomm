const layout = require('../../layout');

module.exports = ({content: products, req }) => {



  const renderedProducts = products
    .map(product => {
      return `
      <tr>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>
          <a href="">
            <button class="button is-link">
              Edit
            </button>
          </a>
        </td>
        <td>
          <button class="button is-danger">Delete</button>
        </td>
      </tr>
    `;
    })
    .join('');

  return layout({req,
    content: `
    <div class="admin container">
      <div class="control">
        <h1 class="subtitle">Products</h1>  
        <a href="/admin/product/new" class="button is-primary">New Product</a>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          ${renderedProducts}
        </tbody>
      </table>
      </div>
    `
  });
};