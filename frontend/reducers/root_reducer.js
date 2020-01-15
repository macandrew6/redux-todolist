import { combineReducers } from 'redux';
import todosReducer from './todo_reducer';


const rootReducer = combineReducers({
  todosReducer
});

export default rootReducer;