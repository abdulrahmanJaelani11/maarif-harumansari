const express = require('express');
const router = express.Router();

const FasilitasController = require('../controllers/FasilitasController');

router.get('/fasilitas', FasilitasController.getAll);
router.post('/fasilitas', FasilitasController.create);
router.put('/fasilitas/:id', FasilitasController.update);

module.exports = router;