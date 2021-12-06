const axios = require('axios');

const pong = async () => {
  try {
    const response = await axios.get('http://localhost:3000/ping/');
    console.log(response.status);
    console.log(response.data);
  } catch (error) {
    next(error)
  }
}

pong()