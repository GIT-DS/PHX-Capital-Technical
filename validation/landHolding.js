const Validator = require('validator');
const validText = require('./valid-text');
const validInt = require('./valid-int')
const validFloat = require('./valid-float')

module.exports = function validateAccountInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.account = validText(data.account) ? data.account : '';
  data.ownerId = validText(data.ownerId) ? data.ownerId : '';
  data.legalEntity = validText(data.legalEntity) ? data.legalEntity : '';
  // data.netMineralAcres = validInt(data.netMineralAcres) ? data.netMineralAcres : '';
  // data.mineralOwnerRoyalty = validInt(data.mineralOwnerRoyalty) ? data.mineralOwnerRoyalty: '';
  data.sectionName = validText(data.sectionName) ? data.sectionName : '';
  data.section = validText(data.section) ? data.section : '';
  data.township = validText(data.township) ? data.township : '';
  data.range = validText(data.range) ? data.range : '';
  data.titleSource = validText(data.titleSource) ? data.titleSource : '';
  

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Land Holding Name field is required';
  }

  if (Validator.isEmpty(data.account)){
    errors.account = 'Account field is required'
  }

  if (Validator.isEmpty(data.ownerId)){
    errors.account = 'Owner field is required'
  }

  if (Validator.isEmpty(data.legalEntity)) {
    errors.legalEntity = 'Legal Entity field is required';
  }
  if (Validator.isEmpty(data.netMineralAcres)){
    errors.netMineralAcres = 'Net Mineral Acres field is required'
  }
  
  if (Validator.isEmpty(data.mineralOwnerRoyalty)){
    errors.mineralOwnerRoyalty = 'Mineral Owner Royalty field is required'
  }
  
  if (Validator.isEmpty(data.sectionName)){
    errors.sectionName = 'Section Name field is required'
  }
    
  if (Validator.isEmpty(data.section)){
    errors.section = 'Section field is required'
  }

  if (data.section.length !== 3){
    errors.section = 'Section field must be 3 characters long'
  }


  if (Validator.isEmpty(data.township)){
    errors.township = 'Township field is required'
  }

  console.log(data.township)
  if (data.township[data.township.length - 1] !== 'N' && data.township[data.township.length - 1] !== 'S' ){
    errors.township = "Township must end in 'N' or 'S'"
  }
  
  if (Validator.isEmpty(data.range)){
    errors.range = 'Range field is required'
  }

  if (data.range.length !== 4){
    errors.range = 'Range must be 4 characters long'
  }

  if (data.range[data.range.length - 1] !== 'E' && data.range[data.range.length - 1] !== 'W'){
    errors.range = "Range must end in 'E' or 'W'"
  }

  if (Validator.isEmpty(data.titleSource)){
    errors.titleSource = 'Title Source field is required'
  }

  if (!Validator.equals(data.titleSource, "Class A") && 
  !Validator.equals(data.titleSource, "Class B") && 
  !Validator.equals(data.titleSource, "Class C") && 
  !Validator.equals(data.titleSource, "Class D")
) {
  errors.titleSource = 'Title Source field is invalid';
}


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};