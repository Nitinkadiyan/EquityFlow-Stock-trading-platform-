const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.cookies.sessionToken;

  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.accessTokenSecret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};