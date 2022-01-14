
const mongoose = require('mongoose')
const express = require('express');
const router=express.Router();
const User = require("../models/user.model")
const authenticate = require('../middlewares/authenticate')


router.get("/",authenticate,  async function(req, res) {
    const page = +req.query.page||1;
    const size = +req.query.size||10;
    const offset=(page-1)*size;
    const user = req.user;

    delete user.password
    
    const total=await User.find({email: user.email}).countDocuments().lean().exec();
    const pageCount=Math.ceil(total/size);
    const products = await User.find({email: user.email}).skip(offset).limit(size).lean().exec();
    
    return res.send({products, user})
})
router.patch("/:id",authenticate,  async function(req, res) {
  
    const user = req.user;

    delete user.password;
    
   // const total=await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
    const products = await  User.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
    
    return res.send({products, user})
})
