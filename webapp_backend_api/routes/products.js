const router = require('express').Router();

const productController = require('../controllers/productController')

// All Promotions
router.get('/promotions/all', productController.allPromotions)

// 4 Promotions
router.get('/promotions', productController.promotions)

// Latest Product
router.get('/latest', productController.latestProduct)

// Search
router.get('/search', productController.search)

// Related
router.get('/:slug/related', productController.related)

// Show
router.get('/:slug', productController.show)

// Index
router.get('/', productController.index)

module.exports = router