const AuthModel = require('../models/AuthModel.js');
const response = require('../response');

exports.registerUser = async (req, res) => {
    try {
        const { body } = req;
        
        await AuthModel.registerUser(body);
        
        return response(200, body, 'Berhasil menambahkan user baru', res);
    } catch (error) {
        console.log(error);
        return response(500, body, 'Gagal menambahkan user baru', res, error);
    }
}
