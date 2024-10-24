const db = require('../config/database');

class SitusModel {
   static async getAll() {
        const query = 'SELECT * FROM situs';
        const [rows] = await db.query(query);
        return rows[0];
    }

    static async update(id, data)
    {
        let fill = '';
        if(data.file) {
            fill = `, file = "${data.file}"`;
        }
        if(data.sejarah) {
            fill = `, sejarah = "${data.sejarah}"`;
        }
        if(data.visi_misi) {
            fill = `, visi_misi = "${data.visi_misi}"`;
        }
        if(data.email) {
            fill = `, email = "${data.email}"`;
        }
        if(data.telepon) {
            fill = `, telepon = "${data.telepon}"`;
        }
        if(data.alamat) {
            fill = `, alamat = "${data.alamat}"`;
        }
        const query = `UPDATE situs SET nama_situs = "${data.nama_situs}" ${fill} WHERE id = ${id}`;
        return db.execute(query);
    }
}

module.exports = SitusModel;