const FasilitasModel = require('../models/FasilitasModel');
const response = require('../response');
const upload = require('../config/upload');
const url_pic = 'http://localhost:3000/api/gambar-berita/';

exports.getAll = async (req, res) => {
    try {
        const berita = await FasilitasModel.getAll();
        berita.map((item) => {
            item.file = `${url_pic + item.file}`;
        });
        return response(200, berita, 'Berhasil mengambil data fasilitas', res);
    } catch (error) {
        return response(500, berita, 'Gagal mengambil data fasilitas', res, error);
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
            await FasilitasModel.create(body);
            return response(200, body, 'Berhasil Menambahkan Fasilitas', res);
        } catch (error) {
            return response(500, body, 'Gagal Menambahkan Fasilitas', res, error);
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
            await FasilitasModel.update(params.id, body);
            return response(200, body, 'Berhasil Mengubah Fasilitas', res);
        } catch (error) {
            return response(500, body, 'Gagal Mengubah Fasilitas', res, error);
        }
    })
}