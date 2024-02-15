const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type : String,
    unique : true
  },
  password:{ type:String }
});

let Admin = mongoose.model('admind',adminSchema)

module.exports = Admin