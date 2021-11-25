module.exports = async (req, res, next) => {
  try {
    const { admin } = req.user;
    if (!admin) {
      return res.status(403).json({ error: { message: 'Restricted access' } });
    }
    return res.status(200).json({ secretInfo: 'Peter Parker é o Miranha' });
  } catch (err) {
    next(err);
  }
};