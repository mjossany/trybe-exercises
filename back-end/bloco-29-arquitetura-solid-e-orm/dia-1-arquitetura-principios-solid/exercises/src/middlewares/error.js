module.exports = (err, _req, res, _next) => {
  res.status(err.status).json({
    err: {
      code: err.code,
      message: err.message,
    },
  });
};