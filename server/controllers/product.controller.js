const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World - Product controller"
    });
}

// CREATE PRODUCT
module.exports.createProduct = (request, response) => {
    const { productName, price, description } = request.body;
    Product.create({
        productName,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}