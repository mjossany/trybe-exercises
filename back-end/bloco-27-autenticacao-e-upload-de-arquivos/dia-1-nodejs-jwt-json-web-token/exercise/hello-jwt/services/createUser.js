const model = require('../models/documents');

module.exports = async (username, password) => {
  const response = await model.createUser(username, password);
  return response;
};