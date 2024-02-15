const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseName : {
    type : String,
    require : true
  },
  userID : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

const COURSE = mongoose.model('course',courseSchema)

module.exports = COURSE