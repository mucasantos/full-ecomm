const express = require('express')

const multer = require('multer')

const products = require("../../views/productsView/productsView")
const userRepo = require("../../repositories/products");
const router = express.Router()
const upload = multer({storage:multer.memoryStorage()})


router.get('/products', (req,res)=>{
    res.send("list")
})
router.get('/products/new', (req,res)=>{
    res.send(products())
})
router.post('/products/new', upload.single('image'), async(req,res)=>{

    await userRepo.create(req.body);
    res.send("TUDO CERTO");
    console.log(req.body)
})

module.exports =  router;

