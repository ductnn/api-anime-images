const Pool = require('pg').Pool;

let connection = {
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    localhost: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    PORT: process.env.DB_PORT
};

const pool = new Pool(connection)

module.exports = pool;
