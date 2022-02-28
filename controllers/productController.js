const db = require('../models');

const Product = db.products;
const Review = db.reviews;


// Create and Save a new Product
const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    const product = await Product.create(info)
    res.json(product);
}

const getAllProducts = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
}

const getOneProduct = async (req, res) => {
    let id = req.params.id;
    const product = await Product.findOne({
        where: {
            id: id
        }
    });
    res.json(product);
}

const updateOneProduct = async (req, res) => {
    let id = req.params.id;
    const product = await Product.update(
        req.body,
        {
        where: {
            id: id
        }
    });
    res.json(product);
}

const deleteOneProduct = async (req, res) => {
    let id = req.params.id;
    const product = await Product.destroy(
        req.body,
        {
        where: {
            id: id
        }
    });
    res.json(product);
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct
}