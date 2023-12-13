const {check, validationResult} = require("express-validator")
const userRepo = require("../../repositories/users");

module.exports = {
    requireEmail: check('email').isEmail().custom(async (email)=>{
        const emailInUse = await userRepo.getOneBy({email})
        if (emailInUse) {
          throw new Error("Email já em uso..")
          
        }
      })
}