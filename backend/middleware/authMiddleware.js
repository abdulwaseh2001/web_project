// backend/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // grab the header correctly
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "unauthorized" });
  }

  // split on the space, not on an empty string
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "invalid token" });
  }
};
