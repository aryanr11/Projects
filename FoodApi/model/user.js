const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    mail : {
        type: String,
        unique: true,
      },
    password : String,
    request :{
      type : String,
      enum : ['panding',''],
      default : 'panding',
      required : true
    }
});

const USER = mongoose.model('user',userSchema)

module.exports = USER