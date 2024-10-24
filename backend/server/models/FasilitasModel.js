const db = require('../config/database');

class FasilitasModel {
   static async getAll() {
        const query = 'SELECT * FROM fasilitas';
        const [rows] = await db.query(query);
        return rows;
    }

    static async create(data)
    {
        const query = `INSERT INTO fasilitas (judul, deskripsi, active, created_by, created_date, file) VALUES (
        "${data.judul}", "${data.deskripsi}", ${data.active}, ${data.created_by}, "${data.created_date}", "${data.file}")`;
        return db.execute(query);
    }

    static async update(id, data)
    {
        let fill = '';
        if(data.file) {
            fill = `, file = "${data.file}"`;
        }
        const query = `UPDATE fasilitas SET judul = "${data.judul}", deskripsi = "${data.deskripsi}", active = "${data.active}", updated_by = "${data.updated_by}", updated_date = "${data.updated_date}" ${fill} WHERE id = ${id}`;
        return db.execute(query);
    }
}

module.exports = FasilitasModel;