//trabalhar com o filesystem
const fs = require("fs");
const crypto = require("crypto");

class UserRepository {
  //Construtor com a verificação de arquivo
  constructor(filename) {
    if (!filename) {
      throw new Error("Tu precisa informa um nome de arquivo!!");
    }
    //propriedade da classe
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (error) {
      fs.writeFileSync(this.filename, "[]");
    }
  }
  //Criar os métodos

  async getAll() {
    /*
    //abrir o arquivo (this.filename)
    const contents = await fs.promises.readFile(this.filename);
    // fazer parse para JSON
    const data = JSON.parse(contents);
    //ler o conteudo
    //retornar a lista
    return data;
*/
    return JSON.parse(await fs.promises.readFile(this.filename));
  }

  async create(atributos) {
    //adicionar o id ao atributo recebido
    atributos.id = this.randomId();
    //Ler o meu arquivo
    const records = await this.getAll();
    //gravar no array records
    records.push(atributos);
    //devolver para o arquivo
    await this.writeAll(records);
  }

  async writeAll(records) {
    await fs.promises.writeFile(this.filename, JSON.stringify(records));
  }
  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }
}

//test dev
//new UserRepository("users.json");

const test = async () => {
  const repo = new UserRepository("users.json");
  await repo.create({ nome: "Joao", email: "joaoa@email.com" });
  const users = await repo.getAll();
  console.log(users);
};

test();
