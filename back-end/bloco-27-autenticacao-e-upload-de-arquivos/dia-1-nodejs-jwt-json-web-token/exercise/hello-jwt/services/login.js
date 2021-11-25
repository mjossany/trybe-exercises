const jwt = require('jsonwebtoken');
const model = require('../models/documents');

const secret = 'meusecret';

const checkIfAdmin = (username, password) => {
  if (username === 'admin' && password === 's3nh4S3gur4???') {
    return {
      username,
      admin: true,
    };
  }
  return {
    username,
    admin: false,
  };
};

module.exports = async (username, password) => {
  const user = await model.findUser(username);
  
  if (!user || user.password !== password) {
    return { 
      err: {
        message: 'Usuário não existe ou senha inválida',
      },
    };
  }

  const payload = checkIfAdmin(username, password);
  
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};
