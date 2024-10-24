const db = require('../config/database');
const bcrypt = require('bcrypt');

class AuthModel {
    static async registerUser(data) {
        console.log(data.username);
        const hashedPassword = await this.encryptPassword(data.password);
        const values = [data.username, hashedPassword, data.nama_lengkap, data.email, data.role_id, data.active];
        // const values = ['abdurahman', hashedPassword, 'Abdul Rahman Jaelani', 'abdulrahmanjaelani11@gmail.com', 1, 1];
        const query_insert_user = `INSERT INTO sec_user (username, password, nama_lengkap, email, role_id, active) VALUES (?, ?, ?, ?, ?, ?)`;
        return db.execute(query_insert_user, values);
    }
    
    static async encryptPassword(password) {
      try {
          const saltRounds = 10; // Jumlah salt rounds, semakin tinggi semakin aman tetapi lebih lambat
          const hashedPassword = await bcrypt.hash(password, saltRounds);
          return hashedPassword;
      } catch (error) {
          console.error('Error encrypting password:', error);
          throw new Error('Encryption failed');
      }
    }
}

module.exports = AuthModel;