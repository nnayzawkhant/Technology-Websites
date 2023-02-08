const express = require('express');
const { postController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(  postController.createPost)
  .get( postController.getPosts);

router
  .route('/:postId')
  .get( postController.getPost)
  .patch(postController.updatePost)

module.exports = router;