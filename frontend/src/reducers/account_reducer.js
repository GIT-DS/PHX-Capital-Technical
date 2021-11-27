import {RECEIVE_ACCOUNTS, RECEIVE_ACCOUNT, REMOVE_ACCOUNT} from '../actions/account_actions'

const accounts = (state = [], action) => {
    Object.freeze(state);
    let newState = [];
    switch (action.type) {
      case RECEIVE_ACCOUNTS:
        return action.accounts.data;
      case RECEIVE_ACCOUNT:
          newState.push(action.account.data)
          return newState 
      case REMOVE_ACCOUNT:
        newState = [...state];
        for (let i = 0; i < newState.length; i++){
          if (newState[i].id === action.recipeId) {
            delete newState[i];
          }
        }
        return newState;
      default:
        return state;
    }
};

export default accounts;