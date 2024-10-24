const KegiatanModel = require('../models/KegiatanModel');
const response = require('../response');
const upload = require('../config/upload');
const url_pic = 'http://localhost:3000/api/gambar-berita/';

exports.getAll = async (req, res) => {
    try {
        const berita = await KegiatanModel.getAll();
        berita.map((item) => {
            item.file = `${url_pic + item.file}`;
        });
        return response(200, berita, 'Berhasil mengambil data Kegiatan', res);
    } catch (error) {
        return response(500, berita, 'Gagal mengambil data Kegiatan', res, error);
    }
}

exports.create = async (req, res) => {
    upload.single('file')(req, res, async (err) => {
        if(err) {
            return response(500, null, 'Gagal Upload Logo', res, err);
        }
        
        let file = req.file.filename;
        const {body} = req;
        body.file = file;
        try {
            await KegiatanModel.create(body);
            return response(200, body, 'Berhasil Menambahkan Kegiatan', res);
        } catch (error) {
            return response(500, body, 'Gagal Menambahkan Kegiatan', res, error);
        }
    });
}

exports.update = async (req, res) => {
    upload.single('file')(req, res, async (err) => {
        if(err) {
            return response(500, null, 'Gagal Upload Logo', res, err);
        }
    
        const fileName = req.file ? req.file.filename : null;
        const {params, body} = req;
        fileName ? body.file = fileName : null;
        try {
            await KegiatanModel.update(params.id, body);
            return response(200, body, 'Berhasil Mengubah Kegiatan', res);
        } catch (error) {
            return response(500, body, 'Gagal Mengubah Kegiatan', res, error);
        }
    })
}