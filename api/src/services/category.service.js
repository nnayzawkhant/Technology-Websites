const httpStatus = require('http-status');
const { Category, Post } = require('../models');

/**
 * Create a user
 * @param {Object} categoryBody
 * @returns {Promise<Category>}
 */
const createCategory = async (categoryBody) => {
  return Category.create(categoryBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCategories = async (filter, options) => {
  const categories = await Category.paginate(filter, options);
  return categories;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<Post>}
 */
const getCategoryById = async (id) => {
  return Category.findById(id);
};


/**
 * Update user by id
 * @param {ObjectId} categoryId
 * @param {Object} updateBody
 * @returns {Promise<Category>}
 */
const updateCategoryById = async (categoryId, updateBody) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }

  Object.assign(category, updateBody);
  await category.save();
  return category;
};

const deleteCategoryById = async (categoryId) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  await category.remove();
  return category;
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const latestCategories = async (filter, options) => {
  const categories = await Category.paginate(filter, options);
  return categories;
};

/**
 * Update Number of Posts
 * @param {ObjectId} categoryId
 * @param {Object} numberOfPosts
 * @returns {Promise<Category>}
 */
const updateNumberOfPosts = async (categoryId) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }

  let numPosts = await Post.count({ category: categoryId });
  Object.assign(category, {numberOfPosts: numPosts});
  await category.save();
  return category;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<Post>}
 */
const getLatestCategoryById = async (id) => {
  return Category.findById(id);
};

module.exports = {
  createCategory,
  queryCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  latestCategories,
  updateNumberOfPosts,
  getLatestCategoryById
};