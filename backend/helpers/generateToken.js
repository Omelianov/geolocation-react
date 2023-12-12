require("dotenv").config();
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const generateToken = (id) => {
  const token = jwt.sign({ payload: { id } }, SECRET_KEY, { expiresIn: "24h" });
  return token;
};

module.exports = generateToken;
