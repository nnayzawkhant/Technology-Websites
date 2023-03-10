const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');
const { viewsController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(viewsController.createViews)

router
  .route('/:viewId')
  .get(viewsController.getView)
  .patch(viewsController.updateView)

module.exports = router;