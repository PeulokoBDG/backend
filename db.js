const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "sql.freedb.tech", 
    user: "freedb_Alunos",
    password: "a@*a5#3?aM4m9na",
    database: "freedb_Arquivos"
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});

module.exports = connection;
