const httpStatus = require('http-status');
const { Views, Post } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a post
 * @param {Object} viewBody
 * @returns {Promise<Views>}
 */
const createViews = async (viewBody) => {
  return Views.create(viewBody);
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<Views>}
 */
const getViewsById = async (id) => {
    return Views.findById(id);
  };

/**
 * Update user by id
 * @param {ObjectId} viewId
 * @param {Object} updateBody
 * @returns {Promise<Views>}
 */
const updateViewsById = async (viewId, updateBody) => {
    const view = await getViewsById(viewId);
    if (!view) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Views not found');
      }
    let numPosts = await Post.count({ views: viewId });
    Object.assign(category, {numberOfPosts: numPosts});
    Object.assign(view, updateBody);
    await view.save();
    return view;
  };

module.exports = {
  createViews,
  getViewsById,
  updateViewsById
};