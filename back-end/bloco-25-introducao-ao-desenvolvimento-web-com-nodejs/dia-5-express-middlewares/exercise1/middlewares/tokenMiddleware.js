const validateToken = (req, res, next) => {
const { authorization } = req.headers;
if (!authorization) return res.status(401).json({ message: "invalid token" });
if (typeof authorization !== "string") return res.status(401).json({ message: "invalid token" });
if (authorization.length !== 12) return res.status(401).json({ message: "invalid token" });
return next();
};

module.exports = validateToken;