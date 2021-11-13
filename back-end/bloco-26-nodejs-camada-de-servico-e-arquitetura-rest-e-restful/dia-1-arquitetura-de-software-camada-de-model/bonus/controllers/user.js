const {
  insertUser,
  getUsers,
  updateUserById,
  findUserById,
} = require('../models/User');

const createUser = async (req, res, _next) => {
  const { firstName, lastName, email } = req.body;
  const re = await insertUser(firstName, lastName, email);
  res.status(201).json({
    id: re.insertedId,
    firstName,
    lastName,
    email
  })
};

const getAllUsers = async (_req, res, _next) => {
  const re = await getUsers();
  if (re === null) return res.status(200).json([]);
  return res.status(200).json(re);
};

const modifyUserById = async (req, res, next) => {
  const { firstName, lastName, email } = req.body;
  const { id } = req.params;
  const re = await updateUserById(id, firstName, lastName, email);
  if (!re) return res.status(404).json({
    "error": true,
    "message": 'Usuário não foi encontrado'
  });
  const usuario = await findUserById(id)
  return res.status(200).json(usuario[0]);
};

module.exports = {
  createUser,
  getAllUsers,
  modifyUserById
};