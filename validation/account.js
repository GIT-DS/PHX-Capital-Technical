const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateAccountInput(data) {
  let errors = {};

  data.accountName = validText(data.accountName) ? data.accountName : '';
  data.entityType = validText(data.entityType) ? data.entityType : '';
  data.ownerType = validText(data.ownerType) ? data.ownerType : '';
  data.address = validText(data.address) ? data.address : '';

  if (Validator.isEmpty(data.accountName)) {
    errors.accountName = 'Account Name field is required';
  }

  if (!Validator.equals(data.entityType, "Company") && 
    !Validator.equals(data.entityType, "Individual") && 
    !Validator.equals(data.entityType, "Investor") && 
    !Validator.equals(data.entityType, "Trust")
  ) {
    errors.entityType = 'Entity Type field is invalid';
  }

  if (!Validator.equals(data.ownerType, "Competitor") && 
    !Validator.equals(data.ownerType, "Seller") && 
    !Validator.equals(data.ownerType, "Investor") && 
    !Validator.equals(data.ownerType, "Professional") 
  
  ) {
    errors.ownerType = 'Owner Type field is invalid';
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'Address field is required';
  }

  if (Validator.isEmpty(data.numLandHoldings)){
    errors.numLandHoldings = "Total Number of Land Holdings is required"
  }

  if (!Validator.isInt(data.numLandHoldings)){
    errors.numLandHoldings = "Total Number of Land Holdings must be a number"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};