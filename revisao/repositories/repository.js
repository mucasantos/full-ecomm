//importar o fs
//criar os métodos para salvar o nosso user
const fs = require("fs");
//Classe com um construtor que cria o nosso arquivo
//Usamos o module.exports
//Este repositório será utilizando para criar
//os métodos comuns
module.exports = class Repository {
  //construtor, vou verificar se recebo um nome de arquivo
  constructor(filename) {
    if (!filename) {
      throw new Error("Você precisa informar o nome de um aquivo!");
    }
    //atributo da classe
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (error) {
      fs.writeFileSync(this.filename, "[]");
    }
  }
  //Nossos métodos
  async create(atributos) {
    //criar meu user
    //ler todos os dados que tem no arquivo
    const records = await this.getAll();
    //os dados é uma lista, entao add os dados recebidos na lista
    records.push(atributos);
    //escreve de volta no arquivo
    await this.writeAll(records)
  }
  async getAll() {

    //Eu posso trocar para o acesso a um DB
    return JSON.parse(await fs.promises.readFile(this.filename));
  }
  async writeAll(records) {
    await fs.promises.writeFile(this.filename, JSON.stringify(records));
  }
};


