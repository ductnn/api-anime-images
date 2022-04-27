const pg = require('pg').Pool;
const connectionString = process.env.DATABASE_URL;

const db = new pg({
    connectionString: connectionString
})

module.exports = db;
