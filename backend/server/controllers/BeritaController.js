const BeritaModel = require('../models/BeritaModel');
const response = require('../response');
const upload = require('../config/upload');
const url_pic = 'http://localhost:3000/api/gambar-berita/';

exports.getAll = async (req, res) => {
    try {
        const berita = await BeritaModel.getAll();
        berita.map((item) => {
            item.file = `${url_pic + item.file}`;
        });
        return response(200, berita, 'Berhasil mengambil data berita', res);
    } catch (error) {
        return response(500, berita, 'Gagal mengambil data berita', res, error);
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
            await BeritaModel.create(body);
            return response(200, body, 'Berhasil Menambahkan Berita', res);
        } catch (error) {
            return response(500, body, 'Gagal Menambahkan Berita', res, error);
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
            await BeritaModel.update(params.id, body);
            return response(200, body, 'Berhasil Mengubah Berita', res);
        } catch (error) {
            return response(500, body, 'Gagal Mengubah Berita', res, error);
        }
    })
}