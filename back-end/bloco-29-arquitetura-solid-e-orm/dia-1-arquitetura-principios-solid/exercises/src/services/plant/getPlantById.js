const models = require('../../models/documents');

module.exports = async (plantId) => {
  const response = await models.getPlantByIdModel(plantId);
  return response;
};