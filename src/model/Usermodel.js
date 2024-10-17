const db = require('../config/Database');

class UserModel {
    static async getAllUsers() {
        const [rows] = await db.query('SELECT * FROM usuarios');
        return rows;
    }

    static async getUserById(id) {
        const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        return rows[0];
    }

    static async createUser(nome, email) {
        const [result] = await db.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email]);
        return result.insertId;  // Retorna o ID do novo usuário
    }

    static async updateUser(id, nome, email) {
        const [result] = await db.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id]);
        return result.affectedRows;  // Retorna o número de linhas afetadas
    }

    static async deleteUser(id) {
        const [result] = await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
        return result.affectedRows;  // Retorna o número de linhas deletadas
    }
}

module.exports = UserModel;
