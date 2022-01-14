const express = require('express');

const router = express.Router();

const Product = require("../models/product.model")




router.get("/",  async function(req, res) {
    const page = +req.query.page||1;
    const size = +req.query.size||10;
    const offset=(page-1)*size;
    
    
    const total=await Product.find().countDocuments().lean().exec();
    const pageCount=Math.ceil(total/size);
    const products = await Product.find().skip(offset).limit(size).lean().exec();
    
    return res.send({products, user})
})
//The main page should have the pagination functionality with the accurate page numbers 
//with the ability to filter by genre and sort by year of Album release
router.get("/album/",  async function(req, res) {
    let name=req.params.name

    const products = await Product.find({album:name}).lean().exec();
   
    return res.send({products})
})
router.get("/genre/",  async function(req, res) {
    let name=req.params.genre

    const products = await Product.find({genre:name}).lean().exec();
   
    return res.send({products})
})
router.get("/sort/",  async function(req, res) {
   

    const products = await Product.find().sort({year:1}).lean().exec();
   
    return res.send({products})
})
module.exports = router;