const SitusModel = require('../models/SitusModel');
const response = require('../response');
const upload = require('../config/upload');
const url_logo = 'http://localhost:3000/api/logo/';

exports.getAll = async (req, res) => {
    try {
        const situs = await SitusModel.getAll();
        situs.file = `${url_logo + situs.file}`;
        return response(200, situs, 'Data Situs Berhasil Diambil', res);
    } catch (error) {
        return response(500, situs, 'Data Situs Gagal Diambil', res, error);
    }
}

exports.update = async (req, res) => {
    console.log(req.body);
    upload.single('file')(req, res, async (err) => {
        if(err) {
            return response(500, null, 'Gagal Upload Logo', res, err);
        }
    
        const fileName = req.file ? req.file.filename : null;
        const {params, body} = req;
        fileName ? body.file = fileName : null;
        try {
            await SitusModel.update(params.id, body);
            return response(200, body, 'Data Situs Berhasil Diupdate', res);
        } catch (error) {
            return response(500, body, 'Data Situs Gagal Diupdate', res, error);
        }
    })
}