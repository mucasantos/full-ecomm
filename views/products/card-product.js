const prodLayout = require('../../views/products/prod-layout')

module.exports = ({ content: products }) => {
//Acessa a lista de produtos recebida e ao iterar com ela, devolve
//uma nova lista, mas modificada: agora é uma lista contendo cards
// HTML.

    const allprods = products.map(product => {
        return `
<div class="productCard">
            <div class="productCardFlag">
                <span>${product.flag}</span>
            </div>
            <div class="productCardImage">
                <img src="${product.image}" alt="Product One" />
            </div>
            <div class="productInfo">
                <h2>${product.name}</h2>
                <hr />
                <span>${product.price}</span>
            </div>
        </div>`
    })

    return prodLayout({ content: allprods })
}