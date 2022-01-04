const models = require('../../models/documents');

module.exports = async () => {
  const response = await models.getPlants();
  return response;
};