// importtar o fs
// criar os metodos para salvar o nosso user

const fs = require("fs");

<<<<<<< HEAD
// classe com um construtor que cria o nosso arquivo
// usamos o modele.exports


// este repositorio sera utilizado para criar os metodos comuns

module.exports = class Repository {
  // construtor, verificar se recebo um nom

=======
module.exports = class Repository {
  //Construtor com a verificação de arquivo
>>>>>>> resolve
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

  async getOneBy(filtros) {
    console.log(filtros)
    // lista de todos usuarios (array)
    const records = await this.getAll()
    // o loop externo estamos iterando com o array (of)
    // já o IntersectionObserver, estaremos iterando com os objetos (in)
    for (let record of records) {
      // aqui temos a sinalização de que encontramos
      // acessar um objeto em js pode ser objeto.key ou objeto[key]
      let encontrado = true
      for (let key in filtros) {
        if (records[key] != filtros[key]) {
          encontrado = false
        }
      }
      if (encontrado) {
        return record
      }
    }
  }


  async getAll() {
<<<<<<< HEAD
    return JSON.parse(await fs.promises.readFile(this.filename))
=======
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
  //Essa logica funciona pois sabemos que o conteudo de usuarios ~e
  //obrigatoriamente unica!!
  async getOneBy(filtros) {
    //lista de todos os usuários (array)
    const records = await this.getAll();
    //O loop externo estamos iterando com o array (of)
    //Já o interno, estaremos iterando com os objetos (in)
    for (let record of records) {
      //Aqui teremos a sinalização de q encontramos
      //{"email":"sam@email.com","password":"12345678","id":"1ec7990f"}
      //Acessar um objeto em Js pode ser: objeto.key (ex: user.email)
      //ou objeto[key]
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
>>>>>>> resolve
  }

  async writeAll(records) {
    await fs.promises.writeFile(this.filename, JSON.stringify(records))
  }


};
