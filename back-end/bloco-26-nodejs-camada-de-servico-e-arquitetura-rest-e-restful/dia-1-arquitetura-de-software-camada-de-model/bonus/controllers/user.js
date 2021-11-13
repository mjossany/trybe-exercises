const {
  insertUser,
  getUsers,
} = require('../models/User');

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const response = await insertUser(firstName, lastName, email, password);
  return res.status(200).json(response);
}

const getAllUsers = async(req, res) => {
  const response = await getUsers();
  res.status(200).json(response);
}

module.exports = { 
  createUser,
  getAllUsers,
};