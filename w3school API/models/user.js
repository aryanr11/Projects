const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uname : {
    type : String,
    require : true
  },
  email : {
    type : String,
    unique : true,
    require : true
  },
  password : {
    type : String,
    require : true
  }
});

const USER = mongoose.model('user',userSchema)

module.exports = USER