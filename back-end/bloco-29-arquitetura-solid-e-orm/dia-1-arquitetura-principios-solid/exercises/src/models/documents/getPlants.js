const { getPlants } = require('../../controllers/plants');
const plantsData = require('../../../plantsData');

module.exports = async () => {
  const response = await getPlants(plantsData);
  return response;
};