const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    contactno: {
        type: Number,
        require: true
    },
    city: {
        type: String,
        require: true,
    },
    address:  {
        type: String,
        require: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

let Contact = mongoose.model('contactd', contactSchema)

module.exports = Contact