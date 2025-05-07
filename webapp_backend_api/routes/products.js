const router = require('express').Router();

const productController = require('../controllers/ProductController')


// Index
router.get('/', productController.index)

// SHow
router.get('/:slug', productController.show)

module.exports = router