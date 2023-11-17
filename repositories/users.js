const Repository = require("./repository");

const fs = require('fs')
const crypto = require("crypto")

//criptografia
//1° passo
const util = require("util")

const script = util.promisify(crypto.scrypt)

class UserRepository extends Repository {

    apenasUser() { }

    async create(atributos) {

        console.log(atributos)

        atributos.id = this.randomId();

        //1° criptografar a senha do user (criando hash)
        //Criar o Salt
        const salt = crypto.randomBytes(8).toString("hex")

        //2° Inserir o Hashing
        const hashedPassword = await script(atributos.password, salt, 64) //DANDO ERRO AKLIIIO

        //3° Ler o arquivo
        const records = await this.getAll();

        //atualizar o objeto
        const record = {
            ...atributos,
            password: `${hashedPassword.toString("hex")}.${salt}`
        }
        records.push(record);
        await this.writeAll(records);

        return atributos
    }

    //vamos comparar a senha enviada pelo o cliente com a senha com salva no BD.
    //Para isso, precisaremos descriptografar a senha!

    async comparePassword(savedPassword, typedPassword){
        //A logica para salvar foi: Senha cripto . salt 
        const result = savedPassword.split(".")
        const hashedPass = result[0]
        const salt = result[1]

        const hashedPassword = await script(typedPassword, salt, 64) //DANDO ERRO AKLIIIO

        return hashedPassword.toString("hex") == hashedPass 

    }

}
module.exports = new UserRepository("users.json")