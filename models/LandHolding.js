const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LandHoldingSchema = new Schema({
  name: {
    type: String,
    ref: 'users'
  },
  account: {
    type: Schema.Types.ObjectId,
    ref: 'accounts'
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  legalEntity: {
    type: String,
    required: true
  },
  netMineralAcres: {
    type: Number,
    required: true
  },
  mineralOwnerRoyalty: {
    type: Number,
    required: true
  },
  sectionName: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  township: {
    type: String,
    required: true
  },
  range: {
    type: String,
    required: true
  },
  titleSource: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = LandHolding = mongoose.model('landHolding', LandHoldingSchema);