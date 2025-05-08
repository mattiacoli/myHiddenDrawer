const router = require('express').Router();

const customerController = require('../controllers/customerController')


// Index
router.get('/', customerController.index)

// SHow
router.get('/:id', customerController.show)


module.exports = router