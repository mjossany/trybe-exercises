const mysql = require('mysql2/promise');

// let connection = null;

// module.exports = () => {
//   return connection ? connection : connection = mysql.createPool({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'M0urinh4',
//     database: 'users_crud',
//   });
// }

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'M0urinh4',
  database: 'users_crud',
});

module.exports = connection;

