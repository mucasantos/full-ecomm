//trabalhar com o filesystem
const fs = require("fs");
const crypto = require("crypto");

const Repository = require("./repository");

//1º Passo
const util = require("util");
//Transformar o crypto em Async
const scrypt = util.promisify(crypto.scrypt);

class UserRepository extends Repository {
  async create(atributos) {
    console.log(atributos);
    //adicionar o id ao atributo recebido
    atributos.id = this.randomId();
    //1.Criptografar a senha do usuário (criando a hash)
    //Criar o Salt de forma aleatoria
    const salt = crypto.randomBytes(8).toString("hex");
    //2.Inserir o Hanshing
    const hashedPassword = await scrypt(atributos.password, salt, 64);
    //3.Salvar no BD
    //Ler o meu arquivo
    const records = await this.getAll();
    //Atualizar o nosso objeto!
    const record = {
      ...atributos,
      password: `${hashedPassword.toString("hex")}.${salt}`,
    };
    //gravar no array records
    records.push(record);
    //devolver para o arquivo
    await this.writeAll(records);

    return atributos;
  }

  //VAmos criar um método para comparar a senha enviada pelo
  //cliente, com a senha salva no DB.
  //Para isso, precisaremos descriptografar a senha!

  async comparePassword(savedPassword, typedPassword) {
    // A lógica para salvar foi: Senha cripto . salt

    const result = savedPassword.split(".");
    const hashedPass = result[0];
    const salt = result[1];
    const hashedPassword = await scrypt(typedPassword, salt, 64);

    return hashedPassword.toString("hex") == hashedPass;
  }
}

module.exports = new UserRepository("users.json");

/*
//test dev
//new UserRepository("users.json");

const test = async () => {
  const repo = new UserRepository("users.json");
  //await repo.create({ nome: "Maria", email: "maria@email.com" });
  //const users = await repo.getAll();
  //console.log(users);

  repo.update("6336e00c", { age: 56, nome: "Maria Cicera", nasc: 1943 });
};

test();
*/
