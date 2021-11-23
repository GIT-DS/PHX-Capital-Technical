const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  entityType: {
    type: String,
    required: true
  },
  ownerType: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  numLandHoldings: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Account = mongoose.model('account', AccountSchema);