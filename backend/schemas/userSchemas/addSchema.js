const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().trim().min(2).max(30).required(),
  email: Joi.string().required()
});

module.exports = addSchema;
