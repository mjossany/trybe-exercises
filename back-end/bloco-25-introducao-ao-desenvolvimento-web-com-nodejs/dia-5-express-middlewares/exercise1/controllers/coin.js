const axios = require('axios').default;

const getData = async (_req, res, _next) => {
  const { data } = (await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json'))
  return res.status(200).json({ data });
}

module.exports = getData;