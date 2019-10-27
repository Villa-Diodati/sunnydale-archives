const mongoose = require('mongoose');
const effectSchema = require('./effect');

const levelScehma = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  levelNumber: { type: Number, required: true },
  class: { type: String, required: true },
  effects: [effectSchema],
});

module.exports = levelScehma;