const express = require ("express");
const mongoose = require("mongoose");
const app = express();

//importar rutas

const productRoutes = require("./routes/product.routes");
const salesRoutes = require("./routes/sales.routes");
require("dotenv").config();

// conectamos a mongoose

mongoose
.connect(process.env.DB_URL)
.then((db) => console.log(" DB connected"))
.catch((err) => console.log(err));

//configuraciones
app.use(express.urlencoded({extended: false}));

// configurar rutas 
app.get("/", function(req, res) {
    res.send("hello from vercel");
});
app.use("/product", productRoutes);
app.use("/sales", salesRoutes);

app.listen(3000,()=> {
    console.log("server running")
}); 
