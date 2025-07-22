const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  message: { type: String }
});

module.exports = mongoose.model('FormData', formDataSchema);
