const mongoose = require('mongoose');
const effectTypes = [
  'proficiency', 'attribute', 'skill', 'probo',
  'advantage', 'spell', 'slot', 'inventory',
  'attack', 'hp', 'charge', 'other',
  'ability', 'effect', 'class',
];

const effectSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: {
    type: String,
    required: true,
    enum: effectTypes,
  },
  target: {},
  modifier: { type: Function, required: true },
  source: { type: String, required: true },
  relevance: {
    type: [String],
    required: true,
    enum: ['combat', 'magic', 'roleplay', 'other', 'all']
  },
  description: String,
  notes: String,
  targetDie: Function,
  valueDie: Function,
});

module.exports = effectSchema;