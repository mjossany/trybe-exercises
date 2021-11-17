const mysql = require('mysql2/promise');

let connection = null;

module.exports = () => {
  return connection
    ? connection
    : connection = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'M0urinh4',
      database: 'cep_lookup'
    });
};