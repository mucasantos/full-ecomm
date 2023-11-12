const fs = require("fs");
const crypto = require("crypto");

module.exports = class Repository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Você precisa informar o nome de um aquivo!");
    }
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (error) {
      fs.writeFileSync(this.filename, "[]");
    }
  }

  async create(atributos) {
    const records = await this.getAll();
    records.push(atributos);
    await this.writeAll(records)
  }
  
  async getAll() {
      return JSON.parse(await fs.promises.readFile(this.filename));
  }

  async getOne(id) {
    const records = await this.getAll();
    const searchUser = records.find((record) => record.id === id);
    console.log(searchUser);
    return searchUser;
  }

  async getOneBy(filtros) {
    const records = await this.getAll();
    for (let record of records) {
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
    const records = await this.getAll();
    const toUpdate = records.find((record) => record.id === id);
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