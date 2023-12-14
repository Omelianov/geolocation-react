require("dotenv").config();
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const generateToken = (id) => {
  try {
    const token = jwt.sign({ payload: { id } }, SECRET_KEY, { expiresIn: "24h" });
    console.log("Generated Token:", token);
    return token;
  } catch (error) {
    console.error("Token generation error:", error);
    throw error;
  }
};

module.exports = generateToken;
