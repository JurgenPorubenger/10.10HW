const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const carschema = new Schema({
        model: String,
        price: Number,
});


const Model = mongoose.model('Carschema', carschema);
module.exports = Model;