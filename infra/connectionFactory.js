const mysql = require('mysql')

connectionFactory = () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'caelum',
        database: 'casadocodego'
    })
    return connection
}

module.exports = connectionFactory