const router = require('express').Router();

const productController = require('../controllers/productController')


// Index
router.get('/', productController.index)

// Latest Product
router.get('/latest', productController.latestProduct)

// Search
router.get('/search', productController.search)

// Show
router.get('/:slug', productController.show)


module.exports = router