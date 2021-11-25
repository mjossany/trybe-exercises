module.exports = async (req, res, next) => {
  try {
    const { username, admin } = req.user;
    return res.status(200).json({ username, admin });
  } catch (err) {
    next(err);
  }
};