const model = require('../models/documents');

module.exports = async (username, password) => {
  const response = await model.findUser(username);
  if (response) {
    return response;
  }
  const userCreated = await model.createUser(username, password);
  return userCreated;
};