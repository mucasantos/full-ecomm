<<<<<<< HEAD
const Repository = require('./repository')

class ProductRepository extends Repository{
  
=======
//trabalhar com o filesystem
const fs = require("fs");
const crypto = require("crypto");

const Repository = require("./repository");

class ProductRepository extends Repository {
  apenasProduto(){}  
>>>>>>> resolve
}
module.exports = new ProductRepository('products.json')