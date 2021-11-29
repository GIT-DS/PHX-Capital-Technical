import { combineReducers } from 'redux';
import AccountsErrorsReducer from './account_errors_reducer';
import SessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  account: AccountsErrorsReducer
});