import {RECEIVE_LANDHOLDINGS, RECEIVE_LANDHOLDING, REMOVE_LANDHOLDING} from '../actions/landholdings_actions'

const landHoldings = (state = [], action) => {
    Object.freeze(state);
    let newState = [];
    switch (action.type) {
      case RECEIVE_LANDHOLDINGS:
        return action.accounts.data;
      case RECEIVE_LANDHOLDING:
          newState.push(action.accounts.data)
          return newState 
      case REMOVE_LANDHOLDING:
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

export default landHoldings;