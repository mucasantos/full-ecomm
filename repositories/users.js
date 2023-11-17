//trabalhar com o filesystem
const fs = require("fs");
const crypto = require("crypto");

const Repository = require("./repository");
//transformando o crypto em assyncrono
const util = require("util")
const scrypt = util.promisify(crypto.scrypt)
class UserRepository extends Repository {
  apenasUser() { }

  async create(atributos) {

    console.log(atributos)
    //adicionar o id ao atributo recebido
    atributos.id = this.randomId();
    //Ler o meu arquivo
    //gravar no array records

    //criar salt
    const salt = crypto.randomBytes(8).toString("hex");
    //criando o hash
    const hashPassword = await scrypt(atributos.password, salt, 64)
    //ler o arquivo e salvar no balco

    const records = await this.getAll();

    //... atualiza nosso objeto, se ele encontrar algo ele atualiza os dados especificados
    const record = {
      ...atributos,
      password: `${hashPassword.toString("hex")}.${salt}`
    }

    records.push(record);
    //devolver para o arquivo
    await this.writeAll(records);

    return atributos
  }

  //vamos criar um metodo para comparar a senha enviada pelo cliente com a senha enviada pro banco de dados, para isso iremos descriptografar a senha

  async comparePassword(SavedPassword, typedPassword) {
    // A logica para salvar foi: senha criptografada . salt
    const resultSplit = SavedPassword.split('.')
    const hashPassSaved = resultSplit[0]
    const saltSaved = resultSplit[1]

    //cryptografando a senha informada
    const hashPasswordConfirm = await scrypt(typedPassword, saltSaved, 64)

    return hashPasswordConfirm.toString("hex") === hashPassSaved;
  }


}

module.exports = new UserRepository("users.json");

