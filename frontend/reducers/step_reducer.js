import { 
  RECEIVE_STEPS, 
  RECEIVE_STEP, 
  REMOVE_STEP 
} from '../actions/step_actions';

const stepsReducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    // case RECEIVE_STEPS:
    // case RECEIVE_STEP:
    // case REMOVE_STEPS:
      
    default:
      return state;
  }
}; 

export default stepsReducer;