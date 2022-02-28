const router = require('express').Router();
const productController = require('../controllers/productController');
const reviewController = require('../controllers/reviewController');

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getOneProduct);
router.post('/products', productController.addProduct);
router.put('/products/:id', productController.updateOneProduct);
router.delete('/products/:id', productController.deleteOneProduct);

module.exports = router;
