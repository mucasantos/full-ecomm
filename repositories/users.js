const Repository = require("./repository");

const fs = require('fs')
const crypto = require("crypto")

//criptografia
//1° passo
const util = require("util")

const script = util.promisify(crypto.scrypt)

class UserRepository extends Repository {

    apenasUser(){}

    async create(atributos) {

        console.log(atributos)
        atributos.id = this.randomId();
        const records = await this.getAll();
        records.push(atributos);
        await this.writeAll(records);

        return atributos
    }

}
module.exports = new UserRepository("users.json")