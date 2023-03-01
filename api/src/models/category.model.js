const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

var categorySchema = mongoose.Schema(
  {
    categoryname: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);


const Category = mongoose.model('Category', categorySchema);

module.exports = Category;