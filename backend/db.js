const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'SportWaveHub',
  password: 'huy246302',
  port: 5432, // Change the port if your PostgreSQL server is running on a different port
});

module.exports = pool;
