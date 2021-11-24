import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import accounts from './account_reducer';
import landHoldings from './landholding_reducer';


const RootReducer = combineReducers({
  errors,
  session,
  accounts,
  landHoldings,
});

export default RootReducer;