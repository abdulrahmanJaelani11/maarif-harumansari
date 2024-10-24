const express = require('express');
const router = express.Router();

const StafController = require('../controllers/StafController');

router.get('/staf', StafController.getAll);
router.post('/staf', StafController.create);
router.put('/staf/:id', StafController.update);

module.exports = router;