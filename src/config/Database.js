const mysql = require('mysql2/promise');

class Database {
  static async connect() {
    return mysql.createConnection({
      host: 'localhost',      // Ajustar conforme o ambiente
      user: 'root',           // Usuário do banco
      password: '',           // Senha do banco
      database: 'meu_banco',  // Nome do banco de dados
    });

    connection.connect((err) => {
      if (err) {
        console.error('Erro ao conectar:', err.stack);
        return;
      }
      console.log('Conectado como id ' + connection.threadId);
    });
    
    connection.end();
    
  }
}

module.exports = Database;
