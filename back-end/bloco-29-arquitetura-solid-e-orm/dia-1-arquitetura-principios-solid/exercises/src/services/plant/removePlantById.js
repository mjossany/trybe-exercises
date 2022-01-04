const models = require('../../models/documents');

module.exports = async (plantId) => {
  const response = models.removePlantById(plantId);
  return response;
};