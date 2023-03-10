const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const postSchema = mongoose.Schema(
  {
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    photo: {
        type: String,
        required: false,

    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: false,
      },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category',
        required: false, 
    },
    viewCounts: {
        type : Number,
        default: 0
    },
    // category: {
    //     type: String,
    // }
},{
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
postSchema.plugin(toJSON);
postSchema.plugin(paginate);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
