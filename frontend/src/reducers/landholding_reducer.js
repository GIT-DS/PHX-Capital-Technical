import {RECEIVE_LANDHOLDINGS, RECEIVE_LANDHOLDING, REMOVE_LANDHOLDING} from '../actions/landholdings_actions'

const landHoldings = (state = [], action) => {
    Object.freeze(state);
    let newState = [];
    switch (action.type) {
      case RECEIVE_LANDHOLDINGS:
        return action.landholdings.data;
      case RECEIVE_LANDHOLDING:
          newState.push(action.landholding.data)
          return newState 
      case REMOVE_LANDHOLDING:
        newState = [...state];
        for (let i = 0; i < newState.length; i++){
          if (newState[i].id === action.landholdingId) {
            delete newState[i];
          }
        }
        return newState;
      default:
        return state;
    }
  };

export default landHoldings;