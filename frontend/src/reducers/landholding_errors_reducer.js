import { CLEAR_LANDHOLDING_ERRORS, RECEIVE_LANDHOLDING_ERRORS } from "../actions/landholdings_actions"

const LandHoldingErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LANDHOLDING_ERRORS:
      return action.errors;
    case CLEAR_LANDHOLDING_ERRORS:
      return [];
    default:
      return state;
  }
};

export default LandHoldingErrorsReducer;