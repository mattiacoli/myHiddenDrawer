const router = require('express').Router();

const reviewsController = require('../controllers/reviewsController')

router.get('/', reviewsController.getAllReviews)
router.post('/add_review', reviewsController.storeReviews)

module.exports = router;