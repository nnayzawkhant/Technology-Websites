const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required('email is required').email().messages({
      "string.base": `"email" should be a type of 'text'`,
      "string.empty": `"email" cannot be an empty field`,
      "any.required": `"email" is a required.`,
    }),
    password: Joi.string().required('password is required').custom(password),
    name: Joi.string().min(3).max(30).required().messages({
      "string.base": `"name" should be a type of 'text'`,
      "string.empty": `"name" cannot be an empty field`,
      "any.required": `"name" is a required.`,
    }),
    role: Joi.string().valid('user', 'admin'),
    profilePic: Joi.string().required('profilePic is required')
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
      profilePic: Joi.string()
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
