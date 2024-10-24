const express = require('express');
const router = express.Router();

const KegiatanController = require('../controllers/KegiatanController');

router.get('/kegiatan', KegiatanController.getAll);
router.post('/kegiatan', KegiatanController.create);
router.put('/kegiatan/:id', KegiatanController.update);

module.exports = router;