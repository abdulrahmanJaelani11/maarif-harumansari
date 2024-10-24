const express = require('express');
const router = express.Router();

const BeritaController = require('../controllers/BeritaController');

router.get('/berita', BeritaController.getAll);
router.post('/berita', BeritaController.create);
router.put('/berita/:id', BeritaController.update);

module.exports = router;