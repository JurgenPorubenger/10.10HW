const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const userSchema = new Schema({
        username: String,
        email: String,
        pwd: String,
});


const Model = mongoose.model('userSchema', userSchema);
module.exports = Model;