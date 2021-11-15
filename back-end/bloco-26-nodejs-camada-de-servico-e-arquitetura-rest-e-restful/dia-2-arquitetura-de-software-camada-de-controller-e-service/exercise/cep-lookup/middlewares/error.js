module.exports = (err, _req, res, _next) => {
  console.error(err.message);
  res.status(500).end()
};