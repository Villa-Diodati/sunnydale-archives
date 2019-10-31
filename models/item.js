const mongoose = require('mongoose');
const effectSchema = require('/effect');

const itemSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true, },
  type: { type: String, required: true },
  effects: [effectSchema],
  description: String,
  notes: String,
});

module.exports = mongoose.model('Item', itemSchema);