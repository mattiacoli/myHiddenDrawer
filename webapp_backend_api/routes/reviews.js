const router = require('express').Router();

const reviewsController = require('../controllers/reviewsController')

router.get('/', reviewsController.getAllReviews)

module.exports = router;