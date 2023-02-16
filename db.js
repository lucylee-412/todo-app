const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: '',
  database: 'tasks',
  port: 5432,
});

module.exports = pool;