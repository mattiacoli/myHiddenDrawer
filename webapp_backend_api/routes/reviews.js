const router = require('express').Router();

const reviewsController = require('../controllers/reviewsController')

router.get('/reviews', reviewsController.getAllReviews)