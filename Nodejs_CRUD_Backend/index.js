const express = require('express');
const mongoose = require('mongoose');
const app = new express()
const dbUrl = "mongodb://localhost:27017/vuejscrud_db";

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

const cors = require('cors');

const corsOptions = {
    origin: ["http://localhost:8080"],
    credentials: true,
};

app.use(cors(corsOptions))

//product
const getProductsController = require('./controllers/getProducts')
const getProductController = require('./controllers/getProduct');
const storeProductController = require('./controllers/storeProduct')
const updateProductController = require('./controllers/updateProduct')
const deleteProductController = require('./controllers/deleteProduct');
//
mongoose.connect(dbUrl, { useNewUrlParser: true });

//seed
const Product = require('./models/Product');

Product.find({ }, (error, products) => {
    if (error) {
        console.log("error", error)
    }
    if (products.length == 0) {
        Product.create({ name: "Product1" })
        Product.create({ name: "Product2" })
        Product.create({ name: "Product3" })
    }
});

app.listen(3000, () => {
    console.log('App listening on port 3000')
})


app.get('/', getProductsController);
app.post("/addproduct", storeProductController);
app.get('/product/:id', getProductController);
app.put('/updateproduct', updateProductController);
app.delete('/deleteproduct', deleteProductController);