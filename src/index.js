const express = require('express');

const {register, login} = require("./controllers/auth.controller")
const productController = require("./controllers/product.controller")

const app = express();
console.log("abs");
app.use(express.json());
app.get('/',async function(req,res){
    res.send("connected happy coading")
})
app.post("/register", register);
app.post("/login", login);
app.use("/products", productController)

module.exports = app;