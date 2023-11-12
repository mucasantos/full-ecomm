const prodLayout = require("./prod-layout");

module.exports = ({ content: products }) => {
  return products.map((product) => {
    return `
      <div class="productCard">
        <div class="${product.class || ""}">
          <span>${product.flag || ""}</span>
        </div>
        <div class="productCardImage">
          <img src="${product.image || ""}" alt="${
      product.nome || "Product"
    }" />
        </div>
        <div class="productInfo">
          <h2>${product.nome || ""}</h2>
          <hr />
          <span>${product.price || ""}</span>
        </div>
      </div>
    `;
  });
};
