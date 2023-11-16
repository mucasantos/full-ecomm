//trabalhar com o filesystem
const fs = require("fs");
const crypto = require("crypto");

const Repository = require("./repository");

class UserRepository extends Repository {
  apenasUser() {}

  async create(atributos) {

    console.log(atributos)
    //adicionar o id ao atributo recebido
    atributos.id = this.randomId();
    //Ler o meu arquivo
    const records = await this.getAll();
    //gravar no array records
    records.push(atributos);
    //devolver para o arquivo
    await this.writeAll(records);

    return atributos
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
