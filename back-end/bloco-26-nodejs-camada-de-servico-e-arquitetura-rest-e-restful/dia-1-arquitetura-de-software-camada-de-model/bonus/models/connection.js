const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGODB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
  return db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGODB_URL, OPTIONS)
  .then((conn) => {
    db = conn.db('model_example');
    return db;
  })
};

module.exports = connection;