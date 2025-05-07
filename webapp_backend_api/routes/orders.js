const router = require('express').Router();

const orderController = require('../controllers/orderController');

router.get('/', orderController.index);
router.get('/:id', orderController.show);

module.exports = router;