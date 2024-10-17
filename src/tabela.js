class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaUsuarios(); // Altere o nome do método para refletir corretamente a tabela
    }

    criarTabelaUsuarios() {
        const sql = `
            CREATE TABLE IF NOT EXISTS usuarios (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        this.conexao.query(sql, (error) => {
            if (error) {
                console.error("Erro ao criar a tabela 'usuarios':", error.message);
                return;
            }
            console.log("Tabela 'usuarios' criada com sucesso.");
        });
    }
}

module.exports = new Tabelas();
