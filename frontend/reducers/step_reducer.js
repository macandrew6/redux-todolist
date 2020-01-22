import { 
  RECEIVE_STEPS, 
  RECEIVE_STEP, 
  REMOVE_STEP 
} from '../actions/step_actions';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STEPS:
      return Object.assign({}, state, action.steps);
    case RECEIVE_STEP:
      return Object.assign(
        {}, 
        state, 
        {[action.step.id]: action.step}
      );
    // case REMOVE_STEPS:
      
    default:
      return state;
  }
}; 

export default stepsReducer;