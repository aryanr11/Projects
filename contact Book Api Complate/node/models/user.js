const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:  {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password:  {
        type: String,
        require: true
    }
});

let User = mongoose.model('users', userSchema); // Ensure the model name is consistent

module.exports = User
