const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { viewsService } = require('../services');

const createViews = catchAsync(async (req, res) => {
  const view = await viewsService.createViews(req.body);
  res.status(httpStatus.CREATED).send(view);
});

const getView = catchAsync(async (req, res) => {
    const view = await viewsService.getViewsById(req.params.viewId);
    if (!view) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    res.send(view);
  });
  
  const updateView = catchAsync(async (req, res) => {
    const view = await viewsService.updateViewsById(req.params.viewId, req.body);
    res.send(view);
  });

module.exports = {
  createViews,
  getView,
  updateView
};