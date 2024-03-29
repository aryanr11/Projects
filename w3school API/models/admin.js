const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
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

const ADMIN = mongoose.model('admin',adminSchema)

module.exports = ADMIN