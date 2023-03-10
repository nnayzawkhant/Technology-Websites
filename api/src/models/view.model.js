const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const viewSchema = mongoose.Schema(
  {
    viewcounts: {
        type : Number,
        default: 0
    },
},{
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
viewSchema.plugin(toJSON);
viewSchema.plugin(paginate);

const View = mongoose.model('Views', viewSchema);

module.exports = View;
