const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createPost = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    photo: Joi.string().required(),
    desc: Joi.string().required(),
    category: Joi.string().required(),
  }),
};

const getPosts = {
  query: Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPost = {
  params: Joi.object().keys({
    postId: Joi.string().custom(objectId),
  }),
};

const updatePost = {
  params: Joi.object().keys({
    postId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
        title: Joi.string().required(),
        photo: Joi.string().required(),
        desc: Joi.string().required(),
        category: Joi.string().required(),
        id: Joi.string()
    })
    .min(1),
};

const deletePost = {
  params: Joi.object().keys({
    postId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
