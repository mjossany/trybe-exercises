const { removePlantById } = require('../../controllers/plants');
const plantsData = require('../../../plantsData');

module.exports = async (plantId) => {
  const response = await removePlantById(plantId, plantsData);
  return response;
}