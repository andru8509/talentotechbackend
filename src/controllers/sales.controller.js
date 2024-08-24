const sale = require("../models/sale.model");

const salesController = {
    list: async function (req, res) {
        try {
            const sales = await sale.find();
            res.status(200).json({ sales: sales });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    create: async function (req, res) {
        try {
            const sale = new sale(req.body);
            const product = await product.findById(req.body.products);
            sale.total = sale.quantity * product.price;
            await sale.save();
            res.status(200).json({ sales: sale });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = salesController;