const {
  insertUser,
  getUsers,
  selectUserById,
  selectAndModifyUser,
} = require('../models/User');

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const response = await insertUser(firstName, lastName, email, password);
  return res.status(200).json(response);
};

const getAllUsers = async (_req, res) => {
  const response = await getUsers();
  res.status(200).json(response);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const response = await selectUserById(id);
  if (response) return res.status(200).json(response);
  return res.status(404).json({
    "error": true,
    "message": 'Usuário não encontrado',
  });
};

const modifyUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;
  const response = await selectAndModifyUser(firstName, lastName, email, password, id);
  return response 
  ? res.status(200).json({ id, firstName, lastName, email, password })
  : res.status(404).json({ "error": true, "message": 'Usuário não encontrado' });
};

module.exports = { 
  createUser,
  getAllUsers,
  getUserById,
  modifyUser,
};