const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { postService } = require('../services');
const { Post } = require('../models');

const createPost = catchAsync(async (req, res) => {
  let formData = req.body
  formData.userId = req.user._id
  const post = await postService.createPost(formData);

  res.status(httpStatus.CREATED).send(post);
});


const getPosts = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['title', 'role']);
    let options = pick(req.query, ['sortBy', 'limit', 'page']);
    options.populate = "category"
    const result = await postService.queryPosts(filter, options);
    res.send(result);
    // let result = await Post.find().populate('category').exec();
    // res.send(result);
});

const getPost = catchAsync(async (req, res) => {
    const post = await postService.getPostById(req.params.postId);
    if (!post) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
    }
    res.send(post);
});

const updatePost = catchAsync(async (req, res) => {
    const post = await postService.updatePostById(req.params.postId, req.body);
    res.send(post);
});

const deletePost = catchAsync(async (req, res) => {
    await postService.deletePostById(req.params.postId);
    res.status(httpStatus.NO_CONTENT).send();
});

const getLatestPosts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title', 'role']);
  let options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = "category"
  const result = await postService.latestPosts(filter, options);
  res.send(result);
  // let result = await Post.find().populate('category').exec();
  // res.send(result);
});


module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  getLatestPosts
};


