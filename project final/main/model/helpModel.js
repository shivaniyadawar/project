const mongoose = require('mongoose');

const { Schema } = mongoose;

const help = new Schema({
  typeOfHelp: { type: String, required: true, unique:true },
  description: { type: String, required: true}
});

module.exports = mongoose.model('help', help);