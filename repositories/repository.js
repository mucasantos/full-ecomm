/*
A ideia é criar um super classe, com os médodos e atributos comuns para produtos e usuários,
e demais classes que sejam necessárias.
*/
//module.exports -> indica que quero que os outros arquivos acessem este módulo.

//trabalhar com o filesystem
const fs = require("fs");
const crypto = require("crypto");

module.exports = class Repository {
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

  async getOne(id) {
    //lista de todos os usuários (array)
    const records = await this.getAll();
    const searchUser = records.find((record) => record.id === id);
    console.log(searchUser);
    return searchUser;
  }


  //Criar o getOneBy

  async getOneBy(filtros) {
    //lista de todos os usuários (array)
    const records = await this.getAll();

    //O loop externo estamos iterando com o array (of)
    //Já o interno, estaremos iterando com os objetos (in)
    for (let record of records) {
      //Aqui teremos a sinalização de q encontramos
      let encontrado = true;
      for (let key in filtros) {
        if (record[key] !== filtros[key]) {
          encontrado = false;
        }
      }
      if (encontrado) {
        return record
      }
    }
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