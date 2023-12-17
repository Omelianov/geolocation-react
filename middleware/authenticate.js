const jwt = require("jsonwebtoken");
const User = require("../models/user");
const RequestError = require("../helpers/requestError");

const { SECRET_KEY } = process.env;

const authentication = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.trim().split(" ");
    if (bearer !== "Bearer") {
      throw RequestError(401);
    }
    const {
      payload: { id },
    } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token || user.token !== token) {
      throw RequestError(401);
    }
    console.log('Decoded Token:', jwt.verify(token, SECRET_KEY));
    req.user = user;
    console.log('User information:', req.user);
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    if (!error.status) {
      error.status = 401;
      error.message = "Unauthorized error";
    }
    next(error);
  }
};

module.exports = authentication;
