var mongoose = require('mongoose');
//create a model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,  //validators
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
