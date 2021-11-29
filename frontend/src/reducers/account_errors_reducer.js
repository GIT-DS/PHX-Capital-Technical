import { CLEAR_ACCOUNT_ERRORS, RECEIVE_ACCOUNT_ERRORS } from "../actions/account_actions"

const AccountsErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ACCOUNT_ERRORS:
      return action.errors;
    case CLEAR_ACCOUNT_ERRORS:
      return [];
    default:
      return state;
  }
};

export default AccountsErrorsReducer;