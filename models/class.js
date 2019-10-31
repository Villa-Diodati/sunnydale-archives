const mongoose = require('mongoose');
const levelSchema = require('/level');

const classSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true, },
  levels: [levelSchema],
  description: String,
  notes: String,
});

module.exports = mongoose.model('Class', classSchema);