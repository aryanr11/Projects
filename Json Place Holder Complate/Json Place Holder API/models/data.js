const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id : {
    type : String,
    unique : true,
    required : true
  },
  title : {
    type : String,
    required : true
  },
  body : {
    type : String,
    required : true
  }
})

const DATA = mongoose.model('data',userSchema)

module.exports = DATA