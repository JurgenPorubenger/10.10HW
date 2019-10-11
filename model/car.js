const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const carschema = new Schema({
        username: String,
        email: String,
        pwd: String,
});


const Model = mongoose.model('Carschema', carschema);
module.exports = Model;