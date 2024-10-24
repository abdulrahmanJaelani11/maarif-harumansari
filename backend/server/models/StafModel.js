const db = require('../config/database');

class PendidikModel {
   static async getAll() {
        const query = 'SELECT * FROM pendidik';
        const [rows] = await db.query(query);
        return rows;
    }

    static async create(data)
    {
        const query = `INSERT INTO pendidik (nama, nip, bidang, alamat, ttl, jabatan, active, created_by, created_date, file) VALUES (
        "${data.nama}", "${data.nip}", "${data.bidang}", "${data.alamat}", "${data.ttl}", "${data.jabatan}", ${data.active}, ${data.created_by}, "${data.created_date}", "${data.file}")`;
        return db.execute(query);
    }

    static async update(id, data)
    {
        let fill = '';
        if(data.file) {
            fill = `, file = "${data.file}"`;
        }
        const query = `UPDATE pendidik SET nama = "${data.nama}", nip = "${data.nip}", bidang = "${data.bidang}", alamat = "${data.alamat}", ttl = "${data.ttl}", jabatan = "${data.jabatan}", active = "${data.active}", updated_by = "${data.updated_by}", updated_date = "${data.updated_date}" ${fill} WHERE id = ${id}`;
        return db.execute(query);
    }
}

module.exports = PendidikModel;