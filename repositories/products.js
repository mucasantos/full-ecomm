//trabalhar com o filesystem
const fs = require("fs");
const crypto = require("crypto");

class ProductRepository {
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
     return JSON.parse(await fs.promises.readFile(this.filename));
  }

  async create(atributos) {
     atributos.id = this.randomId();
     const records = await this.getAll();
     records.push(atributos);
    //devolver para o arquivo
    await this.writeAll(records);
  }

  async getOne(id) {
    //lista de todos os usuários (array)
    const records = await this.getAll();
    const searchUser = records.find((record) => record.id === id);
    console.log(searchUser);
    return searchUser;
  }

  async delete(id) {
    const records = await this.getAll();
    const updatedList = records.filter((record) => record.id !== id);
    await this.writeAll(updatedList);
  }

  async update(id, atributos) {
    //Pegar todos
    const records = await this.getAll();
    //Buscar o elemento por id = Aqui eu pego a REFERENCIA do objeto no array
    const toUpdate = records.find((record) => record.id === id);
    //faz o update do ojeto que eu quero
    Object.assign(toUpdate, atributos);

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
  const repo = new ProductRepository("products.json");
  //await repo.create({ nome: "Maria", email: "maria@email.com" });
  //const users = await repo.getAll();
  //console.log(users);

  repo.update("6336e00c", { age: 56, nome: "Maria Cicera", nasc: 1943 });
};

test();
