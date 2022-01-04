const { getPlantById } = require('../../controllers/plants');
const plantsData = require('../../../plantsData');

module.exports = async (plantId) => {
  const response = await getPlantById(plantId, plantsData);
  return response;
};