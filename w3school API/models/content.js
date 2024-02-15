const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  contentName : {
    type : String,
    require : true
  }
});

const CONTENT = mongoose.model('content',contentSchema)

module.exports = CONTENT