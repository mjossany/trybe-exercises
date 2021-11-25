const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'HelloJwt';

let connection = null;

module.exports = async () => {
  try {
    if (connection) return connection;

    connection = (await MongoClient.connect(
        MONGO_DB_URL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      )).db(DB_NAME);
    
    return connection;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};