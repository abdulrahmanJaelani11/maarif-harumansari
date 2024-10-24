const db = require('../config/database');

class SitusModel {
   static async getAll() {
        const query = 'SELECT * FROM berita';
        const [rows] = await db.query(query);
        return rows;
    }

    static async create(data)
    {
        const query = `INSERT INTO berita (judul, deskripsi, active, file) VALUES (
        "${data.judul}", "${data.deskripsi}", 1, "${data.file}")`;
        return db.execute(query);
    }

    static async update(id, data)
    {
        let fill = '';
        if(data.file) {
            fill = `, file = "${data.file}"`;
        }
        const query = `UPDATE berita SET judul = "${data.judul}", deskripsi = "${data.deskripsi}", active = "${data.active}", updated_by = "${data.updated_by}", updated_date = "${data.updated_date}" ${fill} WHERE id = ${id}`;
        return db.execute(query);
    }
}

module.exports = SitusModel;