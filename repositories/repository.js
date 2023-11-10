// importtar o fs
// criar os metodos para salvar o nosso user

const fs = require("fs");

// classe com um construtor que cria o nosso arquivo
// usamos o modele.exports


// este repositorio sera utilizado para criar os metodos comuns

module.exports = class Repository {
  // construtor, verificar se recebo um nom

  constructor(filename) {
    if (!filename) {
      throw new Error("voce precisa informar o nome de um  arquivo!");
    }
    //atributo da classe
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (error) {
      fs.writeFileSync(this.filename, "[]");
    }
  }
  // nossos metodos
  async create(atributos) {
    //ler todos os dados de um arquivo
    const records = await this.getAll();
    //os dados e uma lista, add os dados em uma lista
    records.push(atributos)

    await this.writeAll(records)


  }


  async getAll() {
    return JSON.parse(await fs.promises.readFile(this.filename))
  }

  async writeAll(records) {
    await fs.promises.writeFile(this.filename, JSON.stringify(records))
  }


};
