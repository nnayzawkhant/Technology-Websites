const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { postService, categoryService } = require('../services');
const { Post } = require('../models');

const createPost = catchAsync(async (req, res) => {

  console.log(req)
  let formData = req.body
  formData.user = req.user._id
  await categoryService.updateNumberOfPosts(formData.category)
  const post = await postService.createPost(formData);

  res.status(httpStatus.CREATED).send(post);
});


const getPosts = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['title', 'role']);
    let options = pick(req.query, ['sortBy', 'limit', 'page']);
    options.populate = "user,category"
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
    await categoryService.updateNumberOfPosts(req.body.category)
    res.send(post);
});

const deletePost = catchAsync(async (req, res) => {
    const post = await postService.getPostById(req.params.postId);
    if (!post) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Post not found !!');
    }
  
    await postService.deletePostById(req.params.postId);
    await categoryService.updateNumberOfPosts(post.category)
    res.status(httpStatus.NO_CONTENT).send();
});

const getLatestPosts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title','', 'role']);
  let options = pick(req.query, ['sortBy', 'limit', 'page']);
  options.populate = 'user,category'
  const result = await postService.latestPosts(filter, options);
  res.send(result);
  // let result = await Post.find().select('category').populate('category').exec();
  // res.send(result);
});

const getLatestPost = catchAsync(async (req, res) => {
  console.log(req)
  const post = await postService.getLatestPostById(req.params.postId);
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  res.send(post);
});


module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  getLatestPosts,
  getLatestPost
};


