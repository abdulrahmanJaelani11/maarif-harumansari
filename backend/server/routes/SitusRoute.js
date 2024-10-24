const express = require('express');
const router = express.Router();

const SitusController = require('../controllers/SitusController');

router.get('/get-situs', SitusController.getAll);
router.put('/update-situs/:id', SitusController.update);

module.exports = router;