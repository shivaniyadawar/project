const mongoose = require('mongoose');

const { Schema } = mongoose;

const helpReq = new Schema({
  typeOfHelp: { type: String, required: true, unique:true },
  userName: { type: String, required: true},
  userMobile: { type: String, required: true},
  createdAt: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true},
  status: {type: String, default: 'Pending'},
  asignee: {type: String, default: ''}
});

module.exports = mongoose.model('helpReq', helpReq);