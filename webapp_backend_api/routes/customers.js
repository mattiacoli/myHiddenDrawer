const router = require('express').Router();

const customerController = require('../controllers/customerController')


// Index
router.get('/', customerController.index)

// Show
router.get('/:id', customerController.show)

// Store
router.post('/new_customer', customerController.store)


module.exports = router