const Router = require("express").Router();
const salesController = require("../controllers/sales.controller");

Router.get("/", salesController.list);
Router.post("/", salesController.create);

module.exports = Router;