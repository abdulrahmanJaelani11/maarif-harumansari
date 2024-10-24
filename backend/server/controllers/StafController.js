const StafModel = require('../models/StafModel');
const response = require('../response');
const upload = require('../config/upload');
const url_pic = 'http://localhost:3000/api/gambar-pendidik/';

exports.getAll = async (req, res) => {
    try {
        const pendidik = await StafModel.getAll();
        pendidik.map((item) => {
            item.file = `${url_pic + item.file}`;
        });
        return response(200, pendidik, 'Berhasil mengambil data pendidik', res);
    } catch (error) {
        return response(500, pendidik, 'Gagal mengambil data pendidik', res, error);
    }
}

exports.create = async (req, res) => {
    upload.single('file')(req, res, async (err) => {
        if(err) {
            return response(500, null, 'Gagal Upload', res, err);
        }
        
        let file = req.file.filename;
        const {body} = req;
        body.file = file;
        try {
            await StafModel.create(body);
            return response(200, body, 'Berhasil Menambahkan Pendidik', res);
        } catch (error) {
            return response(500, body, 'Gagal Menambahkan Pendidik', res, error);
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
            await StafModel.update(params.id, body);
            return response(200, body, 'Berhasil Mengubah Pendidik', res);
        } catch (error) {
            return response(500, body, 'Gagal Mengubah Pendidik', res, error);
        }
    })
}