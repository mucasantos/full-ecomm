const prodLayout = require('../views/prod-layout')

//função anonima
module.exports = ({ content: products }) => {



  const allprods = products.map((product) => {


    return `
<div class="productCard">
    <div class="productCardFlag hide">
        <span></span>
    </div>
    <div class="productCardImage">
        <img src="${product.image}" alt="Product One" />
    </div>
    <div class="productInfo">
        <h2>${product.name}</h2>
        <hr />
        <span>${product.price}</span>
    </div>   
</div>
`;
  });

return prodLayout({content: allprods})

};
