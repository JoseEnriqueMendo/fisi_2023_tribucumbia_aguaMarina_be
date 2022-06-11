const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header("token");

  //Check if not token
  if (!token) {
    return res.status(403).send({ message: "Authorization denied" });
  }

  //Verify token

  try {
    const verify = jwt.verify(token, process.env.jwtSecret);
    req.user = verify.data;
  } catch (error) {
    res.status(401).send({ message: "Token is not valid" });
  }
};
