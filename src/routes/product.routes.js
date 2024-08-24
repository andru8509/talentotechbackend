const Router = require('express').Router();
const product = require('../models/product.model');

Router.post("/", async function (req, res) {
    try {
        const product = new product(req.body);
        await product.save();
        res.status(200).json("creado");
    } catch {
        res.status(500).json("err");
    }
});

Router.get("/", async function (req, res) {
    try{
    const products = await produc.find();
    res.status(200).json(products);
    }catch (err){
    res.status(500).json(err);
    }
});
module.exports = Router;